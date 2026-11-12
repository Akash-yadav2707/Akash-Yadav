import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  AlignmentType,
  BorderStyle
} from 'docx';
import { PERSONAL_INFO, PROJECTS, CERTIFICATIONS, EDUCATION, SKILL_CATEGORIES, HONORS_AWARDS } from '../data/portfolioData';

export async function generateWordResumeBlob(): Promise<Blob> {
  const primaryColor = '0F4C81'; // Classic Navy Blue Accent
  const textColor = '222222';
  const mutedColor = '555555';

  const doc = new Document({
    styles: {
      default: {
        document: {
          run: {
            font: 'Calibri',
            size: 20, // 10 pt
            color: textColor
          },
          paragraph: {
            spacing: { line: 240, after: 60 }
          }
        }
      }
    },
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 576, // 0.4 inch
              bottom: 576,
              left: 576,
              right: 576
            }
          }
        },
        children: [
          // Name & Title Header
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 30 },
            children: [
              new TextRun({
                text: PERSONAL_INFO.name,
                bold: true,
                size: 32, // 16 pt
                color: primaryColor
              })
            ]
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 60 },
            children: [
              new TextRun({
                text: `${PERSONAL_INFO.title}  |  B.Tech CSE (DS & AI)`,
                bold: true,
                size: 20, // 10 pt
                color: '333333'
              })
            ]
          }),

          // Contact Line
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 140 },
            children: [
              new TextRun({ text: `📞 ${PERSONAL_INFO.phone}  •  `, size: 19 }),
              new TextRun({ text: `✉ ${PERSONAL_INFO.email}  •  `, size: 19 }),
              new TextRun({ text: `📍 ${PERSONAL_INFO.location}  •  `, size: 19 }),
              new TextRun({ text: `LinkedIn: ${PERSONAL_INFO.linkedin}  •  `, size: 18, color: primaryColor }),
              new TextRun({ text: `GitHub: ${PERSONAL_INFO.github}`, size: 18, color: primaryColor })
            ]
          }),

          // Summary
          createHeading('PROFESSIONAL SUMMARY', primaryColor),
          new Paragraph({
            spacing: { after: 120 },
            children: [
              new TextRun({
                text: PERSONAL_INFO.bio,
                size: 19
              })
            ]
          }),

          // Education Section
          createHeading('EDUCATION', primaryColor),
          ...EDUCATION.map((edu) =>
            new Paragraph({
              spacing: { after: 60 },
              children: [
                new TextRun({ text: `${edu.institution}`, bold: true, size: 20, color: primaryColor }),
                new TextRun({ text: ` — ${edu.degree} (${edu.field})`, bold: true, size: 19 }),
                new TextRun({ text: `  |  ${edu.year}`, size: 18, color: mutedColor })
              ]
            })
          ),

          // Technical Skills Section
          createHeading('TECHNICAL SKILLS', primaryColor),
          ...SKILL_CATEGORIES.map((cat) =>
            new Paragraph({
              spacing: { after: 40 },
              children: [
                new TextRun({ text: `${cat.category}: `, bold: true, size: 19, color: primaryColor }),
                new TextRun({ text: cat.skills.map((s) => s.name).join(' • '), size: 19 })
              ]
            })
          ),

          // Projects Section
          createHeading('FEATURED PROJECTS', primaryColor),
          ...PROJECTS.flatMap((proj) => [
            new Paragraph({
              spacing: { after: 20 },
              children: [
                new TextRun({ text: proj.title, bold: true, size: 20, color: primaryColor }),
                new TextRun({ text: ` [${proj.tech.join(', ')}]`, size: 18, color: mutedColor })
              ]
            }),
            new Paragraph({
              bullet: { level: 0 },
              spacing: { after: 80 },
              children: [new TextRun({ text: proj.description, size: 19 })]
            })
          ]),

          // Certifications Section (Title/Heading only)
          createHeading('CERTIFICATIONS', primaryColor),
          ...CERTIFICATIONS.map((cert) =>
            new Paragraph({
              bullet: { level: 0 },
              spacing: { after: 40 },
              children: [
                new TextRun({ text: `${cert.title}`, bold: true, size: 19 }),
                new TextRun({ text: ` — ${cert.issuer}`, size: 18, color: mutedColor }),
                new TextRun({ text: ` (${cert.date})`, size: 18, bold: true, color: primaryColor })
              ]
            })
          ),

          // Honors & Awards (Title/Heading only)
          createHeading('HONORS & AWARDS', primaryColor),
          ...HONORS_AWARDS.map((award) =>
            new Paragraph({
              bullet: { level: 0 },
              spacing: { after: 40 },
              children: [
                new TextRun({ text: `${award.title}`, bold: true, size: 19 }),
                new TextRun({ text: ` — ${award.event}`, size: 18, color: mutedColor }),
                new TextRun({ text: ` (${award.year})`, size: 18, bold: true, color: primaryColor })
              ]
            })
          )
        ]
      }
    ]
  });

  return await Packer.toBlob(doc);
}

function createHeading(title: string, colorHex: string): Paragraph {
  return new Paragraph({
    spacing: { before: 140, after: 60 },
    border: {
      bottom: {
        color: colorHex,
        space: 1,
        style: BorderStyle.SINGLE,
        size: 8
      }
    },
    children: [
      new TextRun({
        text: title,
        bold: true,
        size: 21, // 10.5 pt
        color: colorHex
      })
    ]
  });
}

