import { GoogleGenAI } from "@google/genai";
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables from .env.example if .env is missing or key is not set
dotenv.config({ path: '.env.example' });

// Ensure API key is present
let apiKey = process.env.GEMINI_API_KEY;

// Fallback: Try to read from .env.example manually if dotenv doesn't pick it up (e.g. if it's commented out or formatted differently)
if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    try {
        const envExample = fs.readFileSync('.env.example', 'utf8');
        const match = envExample.match(/GEMINI_API_KEY="([^"]+)"/);
        if (match && match[1] && match[1] !== "MY_GEMINI_API_KEY") {
            apiKey = match[1];
        }
    } catch (e) {
        // ignore
    }
}

if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
  console.error("Error: GEMINI_API_KEY environment variable is not set or is the default placeholder.");
  // For the purpose of this environment, we might need to rely on the system injecting it.
  // If it fails here, we will use placeholders.
  console.log("Proceeding with placeholder generation/check...");
}

const ai = apiKey && apiKey !== "MY_GEMINI_API_KEY" ? new GoogleGenAI({ apiKey }) : null;

const outputDir = path.join(process.cwd(), 'public', 'images');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const imagesToGenerate = [
  {
    name: 'hero-cleaner.png',
    prompt: 'A professional, friendly female cleaner in a modern, sunlit Manhattan apartment. She is wearing a neat, simple uniform (maybe a polo shirt and apron) and holding a cleaning basket. The apartment has large windows with a view of the city skyline (soft focus). The style is bright, airy, photorealistic, and trustworthy. High quality, 4k.'
  },
  {
    name: 'about-detail.png',
    prompt: 'Close-up shot of hands wearing yellow rubber gloves wiping a marble countertop with a microfiber cloth. Sparkling clean, bright natural light. Focus on the cleaning action and the shine of the surface. Photorealistic, high quality.'
  },
  {
    name: 'about-portrait.png',
    prompt: 'A warm, professional portrait of a Hispanic woman in her 40s (representing Ana Rosa), smiling confidently. She is wearing a casual but professional work outfit (e.g., a blue polo shirt). Background is a blurred, clean, bright living room. Trustworthy, experienced, kind. Photorealistic.'
  },
  {
    name: 'service-regular.png',
    prompt: 'A beautiful, pristine living room in a modern apartment. White sofa, light wood floors, large windows, very tidy and organized. Soft sunlight streaming in. Represents "Regular Cleaning". Photorealistic, interior design style.'
  },
  {
    name: 'service-deep.png',
    prompt: 'A sparkling clean modern bathroom with white tiles and glass shower. Everything is gleaming. A small plant on the vanity. Represents "Deep Cleaning". Photorealistic, bright, sanitary.'
  },
  {
    name: 'service-move.png',
    prompt: 'An empty modern apartment room with polished wood floors and clean white walls. Boxes are neatly stacked in one corner, but the focus is on the cleanliness of the empty space. Represents "Move-In/Move-Out Cleaning". Photorealistic.'
  },
  {
    name: 'service-office.png',
    prompt: 'A modern, clean home office or small business office space. Desk is organized, computer monitor, no clutter. A small succulent plant. Bright and productive atmosphere. Represents "Office Cleaning". Photorealistic.'
  },
  {
    name: 'service-commercial.png',
    prompt: 'A clean, modern retail space or boutique showroom with polished floors and organized display shelves. Bright lighting. Represents "Commercial Cleaning". Photorealistic.'
  },
  {
    name: 'service-custom.png',
    prompt: 'A neat, organized laundry room or closet with folded towels and organized supplies. Represents "Custom Requests" or organization. Photorealistic, pleasing aesthetic.'
  }
];

async function generateImage(item: { name: string, prompt: string }) {
  console.log(`Generating ${item.name}...`);
  
  if (!ai) {
      console.log(`Skipping AI generation for ${item.name} (No API Key). Using placeholder logic if needed.`);
      // In a real scenario, we might copy a default image or create a solid color image here.
      // For now, we will just log.
      return;
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: item.prompt }]
      },
      config: {
        responseMimeType: 'image/png'
      }
    });

    const imagePart = response.candidates?.[0]?.content?.parts?.find(p => p.inlineData);
    
    if (imagePart && imagePart.inlineData && imagePart.inlineData.data) {
      const buffer = Buffer.from(imagePart.inlineData.data, 'base64');
      fs.writeFileSync(path.join(outputDir, item.name), buffer);
      console.log(`Saved ${item.name}`);
    } else {
      console.error(`Failed to generate image for ${item.name}: No image data found.`);
    }
  } catch (error) {
    console.error(`Error generating ${item.name}:`, error);
  }
}

async function main() {
  // Run sequentially to avoid rate limits or overwhelming the model
  for (const item of imagesToGenerate) {
    await generateImage(item);
  }
}

main();
