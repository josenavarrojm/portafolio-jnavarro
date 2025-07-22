import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid messages format" },
        { status: 400 }
      );
    }

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://jnavarrom.vercel.app",
          "X-Title": "MiAppIA",
        },
        body: JSON.stringify({
          model: "tngtech/deepseek-r1t2-chimera:free",
          max_tokens: 1000, // <- Limita la respuesta para evitar error 402
          messages: [
            {
              role: "system",
              content: `
              Responde sin usar Markdown ni formato. Evita usar asteriscos, guiones o símbolos especiales. Responde solo con texto plano y claro.
              Eres un asistente inteligente y amigable que guía a los visitantes del sitio web de Junior.

              Información sobre Jose Navarro:
              - Es un ingeniero electrónico con pasión por el desarrollo de software, la ciencia de datos, IoT y automatización.
              - Tiene experiencia desarrollando aplicaciones full-stack con Flutter, FastAPI y MongoDB.
              - Ha trabajado en proyectos de sistemas de recomendación, visualización de datos y dispositivos IoT.
              - Es también desarrollador RPA y ha diseñado automatizaciones con UiPath.
              - Tiene múltiples certificaciones de IBM, Microsoft, Meta y Wharton School en temas como Machine Learning, React, Azure, y FinTech.
              
              Formación académica:
              - Universidad: University of Magdalena
              - Carrera: Ingeniería Electrónica (2019 - 2024)


              Certificaciones destacadas:
              - IBM Data Science, Generative AI, SQL, Plotly, Data Mining.
              - Microsoft Azure Data Scientist (DP-100), Tensorflow, ML pipelines.
              - Meta React, Front-End Development, UI/UX, TypeScript.
              - UiPath RPA Developer, Automatización de procesos.
              - Wharton FinTech y análisis de mercados financieros.

              Roles principales:
              - Electronic Engineer
              - Data Scientist
              - Software Developer
              - Machine Learning Engineer

              Experiencia profesional:
              1. Full Stack Cross-Platform Developer con integración IoT.
              2. Interno de Machine Learning desarrollando un sistema de recomendaciones.

              Información de contacto de Jose Navarro:
              - Página de contacto: https://jnavarrom.vercel.app/es/contact
              - Correo: josenavarrojmx@gmail.com
              - WhatsApp: https://wa.me/573002694067
              - LinkedIn: https://www.linkedin.com/in/jose-navarro-meneses-913b62338/
              - Instagram: http://instagram.com/jose_jrnm07
              - Twitter (X): https://x.com/jose_JrNm

              Instrucciones adicionales:
              - Si preguntan cómo contactar a Jose, menciona su página de contacto o incluye directamente el correo o enlace de contacto más relevante según el caso.
              - Si preguntan por redes sociales específicas (Instagram, LinkedIn, WhatsApp, etc.), proporciona el enlace correspondiente.
              - Siempre sé claro y educado al compartir la información de contacto.
              - Si se piden datos sensibles o privados no disponibles, indica que no puedes compartir esa información.


              Links útiles:
              - About me: https://jnavarrom.vercel.app/es/about
              - Portafolio: https://jnavarrom.vercel.app/es/project

              Instrucciones:
              - Si preguntan por proyectos, ofrece el enlace al portafolio.
              - Si preguntan quién es Jose Navarro, resume su perfil profesional.
              - Si piden ver su experiencia o formación, responde brevemente o enlaza al About.
              - No inventes información. Responde solo con base en el contexto anterior.
              - Sé claro, breve, útil y amable.`,
            },
            ...messages,
          ],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("OpenRouter Error:", data);
      return NextResponse.json({ error: data }, { status: response.status });
    }

    const reply = data?.choices?.[0]?.message?.content;

    if (!reply) {
      throw new Error("No content in response from OpenRouter");
    }

    return NextResponse.json({ message: reply });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      {
        error:
          typeof error === "string"
            ? error
            : error?.message || "Unknown error occurred",
      },
      { status: 500 }
    );
  }
}
