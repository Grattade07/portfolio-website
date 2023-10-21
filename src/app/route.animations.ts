import {
    trigger, transition, style, query, group, animate, keyframes
} from '@angular/animations'

export const slideLeft = 
trigger('routeAnimations', [
    transition('* <=> *', [
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          })
        ], { optional: true }),
        query(':enter', [
          style({ left: '-100%'})
        ], { optional: true }),
        group([
          query(':leave', [
            animate('600ms ease', style({ left: '100%'}))
          ], { optional: true }),
          query(':enter', [
            animate('600ms ease', style({ left: '0%'}))
          ], { optional: true })
        ]),
        // Normalize the page style... Might not be necessary
    
        // Required only if you have child animations on the page
        // query(':leave', animateChild()),
        // query(':enter', animateChild()),
      ]),
]);