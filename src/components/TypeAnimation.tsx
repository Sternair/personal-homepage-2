import React, { useEffect } from 'react'
import Typed from 'typed.js'

export const TypeAnimation: React.FC = () => {
  let element: React.ElementRef<any>

  useEffect(() => {
    // @ts-ignore
    new Typed(element, {
      strings: [
        '^500Frontend Developer',
        '^500Backend Developer',
        '^500App Developer',
        '^200Agiler De',
        '^200Fullstack De',
        '^200Archit',
        '^2000Software Developer^2000.',
      ],

      typeSpeed: 40,
      backSpeed: 30,
      backDelay: 1000
    })
  }, [])

  return <span ref={el => (element = el)} />
}
