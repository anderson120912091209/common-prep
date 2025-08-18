import { NextResponse } from 'next/server';
import type { Curriculum } from '@/lib/types';

export async function POST(request: Request) {
  try {
    const { goal } = await request.json();
    if (!goal || typeof goal !== 'string') {
      return NextResponse.json({ error: 'Missing goal' }, { status: 400 });
    }

    const id = (globalThis.crypto?.randomUUID?.() ?? `${Date.now()}`);
    const apiKey = process.env.OPENAI_API_KEY;

    let curriculum: Curriculum;

    if (apiKey) {
      const system = [
        'You are an expert education and career advisor.',
        'Given a user goal, return a JSON curriculum with fields:',
        'title, description, steps[].title, steps[].duration?, steps[].topics?[], steps[].courses[].title,',
        'steps[].courses[].description, steps[].courses[].resources[].{type,title,url?,description?,difficulty?,time_commitment?}',
      ].join(' ');

      const resp = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          response_format: { type: 'json_object' },
          messages: [
            { role: 'system', content: system },
            { role: 'user', content: `Goal: ${goal}` },
          ],
        }),
      });

      if (!resp.ok) {
        const details = await resp.text();
        return NextResponse.json({ error: 'AI generation failed', details }, { status: 500 });
      }

      const data = await resp.json();
      const content = data?.choices?.[0]?.message?.content ?? '{}';
      curriculum = JSON.parse(content);
    } else {
      curriculum = mockCurriculum(goal);
    }

    return NextResponse.json({ id, curriculum });
  } catch (error) {
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 });
  }
}

function mockCurriculum(goal: string): Curriculum {
  const role = goal || 'your target role';
  return {
    title: `Personalized Curriculum for ${role}`,
    description: `A structured plan to progress toward ${role}, including foundations, core competencies, practical projects, and advanced topics.`,
    steps: [
      {
        title: 'Month 1-2: Foundations',
        duration: '8 weeks',
        topics: ['Math fundamentals', 'Scientific method', 'Basic programming'],
        courses: [
          {
            title: 'Calculus Essentials',
            description: 'Differential and integral calculus with applications.',
            resources: [
              { type: 'course', title: 'Khan Academy Calculus', url: 'https://www.khanacademy.org/math/calculus-1', difficulty: 'beginner' },
              { type: 'book', title: 'Calculus: Early Transcendentals', author: 'James Stewart' },
            ],
          },
          {
            title: 'Introductory Programming',
            description: 'Programming foundations using Python.',
            resources: [
              { type: 'course', title: 'CS50P', url: 'https://cs50.harvard.edu/python', difficulty: 'beginner' },
            ],
          },
        ],
      },
      {
        title: 'Month 3-4: Core Competencies',
        duration: '8 weeks',
        topics: ['Domain-specific fundamentals', 'Key tools'],
        courses: [
          {
            title: 'Core Domain Course',
            description: `Core fundamentals tailored to ${role}.`,
            resources: [
              { type: 'course', title: 'Coursera Specialization', url: 'https://www.coursera.org', difficulty: 'intermediate' },
            ],
          },
        ],
      },
      {
        title: 'Month 5: Practical Project',
        duration: '4 weeks',
        topics: ['Portfolio-building', 'Real-world application'],
        courses: [
          {
            title: 'Capstone Project',
            description: `Build a project demonstrating competencies relevant to ${role}.`,
            resources: [
              { type: 'project', title: 'Self-defined Capstone', description: 'Plan, implement, and document a real project.' },
            ],
          },
        ],
      },
      {
        title: 'Month 6: Advanced Topics & Interview Prep',
        duration: '4 weeks',
        topics: ['Advanced domain topics', 'Interview and portfolio review'],
        courses: [
          {
            title: 'Advanced Topics',
            description: `Deep dive into advanced areas for ${role}.`,
            resources: [
              { type: 'article', title: 'Advanced reading list', url: 'https://scholar.google.com' },
            ],
          },
        ],
      },
    ],
    relatedCareers: ['Adjacent Role A', 'Adjacent Role B'],
  };
}

