import React from 'react';
import { Section } from './common/Section';
import { Typography } from './common/Typography';
import { Card } from './common/Card';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { Link } from 'react-router-dom';
import { Button } from './common/Button';

const images = [
  { src: 'https://images.unsplash.com/photo-1736066331063-3dcc2b02713f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBicmlnaHQlMjBjbGVhbiUyMGNsYXNzcm9vbSUyMGVtcHR5fGVufDF8fHx8MTc2NzEyNjAxOHww&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Main Classroom' },
  { src: 'https://images.unsplash.com/photo-1763860134810-d86ad4d4f7fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdHVkeSUyMGxvdW5nZSUyMGVkdWNhdGlvbiUyMGNlbnRlcnxlbnwxfHx8fDE3NjcxMjYwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Student Lounge' },
  { src: 'https://images.unsplash.com/photo-1605547446826-efe6b45ffe4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwYWNhZGVtaWMlMjBsaWJyYXJ5JTIwc3R1ZGVudHN8ZW58MXx8fHwxNzY3MTI2MDE4fDA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Library' },
  { src: 'https://images.unsplash.com/photo-1575467678971-7cd5c2937dc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFiJTIwZXhwZXJpbWVudCUyMHN0dWRlbnRzJTIwaGlnaCUyMHNjaG9vbHxlbnwxfHx8fDE3NjcxMjYwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Science Lab' },
];

export const Facilities = () => {
  return (
    <>
       <Section background="warm" className="border-b border-[#E8E6E3]">
        <div className="text-center">
          <Typography variant="overline" color="copper" className="mb-4 block">Facilities</Typography>
          <Typography variant="h1" className="mb-6">Learning Environment</Typography>
          <Typography variant="body" color="muted" className="max-w-2xl mx-auto">
             학생들이 학습에만 집중할 수 있는 쾌적하고 안전한 환경을 제공합니다.
          </Typography>
        </div>
      </Section>

      <Section background="white">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}>
          <Masonry gutter="2rem">
            {images.map((img, i) => (
              <div key={i} className="group relative overflow-hidden">
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Typography variant="h5" color="white" className="uppercase tracking-widest">{img.caption}</Typography>
                </div>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </Section>

      <Section background="warm" spacing="lg">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <Card variant="default">
               <Typography variant="h5" className="mb-2">Safety First</Typography>
               <Typography variant="body" color="muted">24시간 CCTV 작동 및 철저한 출입 관리</Typography>
            </Card>
            <Card variant="default">
               <Typography variant="h5" className="mb-2">Small Classes</Typography>
               <Typography variant="body" color="muted">집중도를 높이는 소수 정예 강의실</Typography>
            </Card>
            <Card variant="default">
               <Typography variant="h5" className="mb-2">Study Lounge</Typography>
               <Typography variant="body" color="muted">언제든 자습할 수 있는 전용 공간</Typography>
            </Card>
         </div>
      </Section>

      <Section background="white" spacing="xl">
        <div className="text-center">
           <Typography variant="h3" className="mb-6">Visit Us</Typography>
           <Typography variant="body" color="muted" className="mb-8">
              직접 방문하셔서 시설을 둘러보고 상담을 받아보세요.
           </Typography>
           <Link to="/contact">
             <Button variant="primary">Schedule a Tour</Button>
           </Link>
        </div>
      </Section>
    </>
  );
};
