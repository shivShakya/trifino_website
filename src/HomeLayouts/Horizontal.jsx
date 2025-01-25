import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Horizontal() {
  useEffect(() => {
    // Animate Card 1 to move left and back
    gsap.to('.card-1', {
      x: '-100vw', // Moves Card 1 to the left
      scrollTrigger: {
        trigger: '.card-1',
        start: 'bottom 65%', // Animation starts when Card 1 reaches the bottom 25% of the viewport
        end: 'top 25%', // Animation ends when Card 1 reaches the top 25% of the viewport
        scrub: true, // Enables bidirectional animation
      },
      duration: 5
    });

    // Animate Card 2 to move right and back
    gsap.to('.card-2', {
      x: '100vw', // Moves Card 2 to the right
      scrollTrigger: {
        trigger: '.card-2',
        start: 'bottom 65%', // Animation starts when Card 2 reaches the bottom 25% of the viewport
        end: 'top 25%', // Animation ends when Card 2 reaches the top 25% of the viewport
        scrub: true, // Enables bidirectional animation
      },
      duration: 5
    });
  }, []);

  return (
    <div className="flex space-x-5 mt-96">
      {/* First Card */}
      <div className="card-1 border border-gray-300 p-5 w-96 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">Card 1</h3>
        <p className="text-sm text-gray-600">This is the first card. You can add more content here.</p>
      </div>

      {/* Second Card */}
      <div className="card-2 border border-gray-300 p-5 w-96 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">Card 2</h3>
        <p className="text-sm text-gray-600">This is the second card. Customize the content as you need.</p>
      </div>
    </div>
  );
}

export default Horizontal;
