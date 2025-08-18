'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import type { Curriculum } from '@/lib/types';

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const [curriculum, setCurriculum] = useState<Curriculum | null>(null);

  useEffect(() => {
    const id = (params as Record<string, string | string[] | undefined>)?.id as string | undefined;
    if (!id) return;
    const key = `curriculum:${id}`;
    const raw = typeof window !== 'undefined' ? localStorage.getItem(key) : null;
    if (raw) {
      try {
        setCurriculum(JSON.parse(raw));
      } catch {
        router.replace('/');
      }
    } else {
      router.replace('/');
    }
  }, [params, router]);

  if (!curriculum) {
    return <div className="page-container p-6">Generating your personalized curriculum...</div>;
  }

  return (
    <div className="page-container p-6">
      <h1 className="text-3xl font-serif mb-2">{curriculum.title}</h1>
      <p className="text-sm opacity-70 mb-6">{curriculum.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {curriculum.steps.map((step, idx) => (
          <div key={idx} className="rounded-xl border border-white/10 bg-white/5 p-4">
            <h2 className="text-xl font-semibold mb-1">{step.title}</h2>
            {step.duration ? <p className="text-xs opacity-60 mb-3">{step.duration}</p> : null}

            {step.topics?.length ? (
              <ul className="list-disc pl-5 text-sm mb-3">
                {step.topics.map((t, i) => <li key={i}>{t}</li>)}
              </ul>
            ) : null}

            <div className="space-y-3">
              {step.courses.map((course, cIdx) => (
                <div key={cIdx} className="rounded-lg border border-white/10 p-3">
                  <div className="font-medium">{course.title}</div>
                  <div className="text-sm opacity-80">{course.description}</div>
                  {course.resources?.length ? (
                    <ul className="mt-2 space-y-1">
                      {course.resources.map((r, rIdx) => (
                        <li key={rIdx} className="text-sm">
                          {r.url ? (
                            <a className="underline hover:opacity-80" href={r.url} target="_blank" rel="noreferrer">
                              {r.title}
                            </a>
                          ) : (
                            r.title
                          )}
                          {r.type ? <span className="opacity-60"> · {r.type}</span> : null}
                          {r.time_commitment ? <span className="opacity-60"> · {r.time_commitment}</span> : null}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

