// backgroundManager.js - The unified style engine

const STYLE_CONFIG = {
    // New section for global page and terminal backgrounds
    global: {
        body: { 
            h: 200, s: 30, l: 85, 
            animate: { l: { min: 80, max: 88, speed: 0.05 } } 
        },
        terminal: { 
            h: 190, s: 60, l: 92, 
            animate: { 
                h: { min: 180, max: 200, speed: 0.01 },
                l: { min: 40, max: 93, speed: 0.001 }
            }
        }
    },
    // Existing terrain styles are now nested under 'terrain'
    terrain: {
        water: {
            textColor: { h: 199, s: 38, l: 74, animate: { h: { min: 165, max: 245, speed: 0.025 }}},
        },
        sand: {
           
           bgColor:   { h: 45, s: 30, l: 61, animate: { s: { min: 5, max: 24, speed: 0.02 }}}
        },
        grass: {
            textColor: { h: 25, s: 19, l: 21, 
				animate: {
					h: { min: 0, max: 360, speed: 0.055},
					s: { min: 10, max: 60, speed: 0.02 },
					l: { min: 15, max: 70, speed: 0.03 }
				}
			},
            bgColor:   { h: 110, s: 19, l: 32, 
				animate: { 
					h: { min: 75, max: 128, speed: 0.0108 },
					s: { min: 5, max: 25, speed: 0.026 },
				}
			}
        },
        forest: {
            textColor: { h: 137, s: 97, l: 22, 
				animate: { 
					s: { min: 95, max: 100, speed: 0.6 },
					l: { min: 3, max: 35, speed: 0.012 }
				}
			},
            bgColor:   { h: 120, s: 30, l: 20, 
				animate: {
					s: { min: 15, max: 35, speed: 0.011 },
				}
			}
        },
        mountain: {
            textColor: { h: 94, s: 32, l: 11, 
				animate: {
					h: { min: 20, max: 100, speed: 0.0105 },
				}
			},
            bgColor:   { h: 10, s: 10, l: 35, 
				animate: {
					l: { min: 10, max: 60, speed: 0.007 },
					s: { min: 5, max: 25, speed: 0.022 },
				}
			}
        }
    }
};

// The class BackgroundManager and its methods below do not need any changes.
// The logic is correct; only the configuration data above was flawed.

class BackgroundManager {
    constructor() {
        this.styles = STYLE_CONFIG;
        this.initializeProperties(this.styles.global);
        this.initializeProperties(this.styles.terrain);
        let styleElement = document.getElementById('dynamic-terrain-styles');
        if (!styleElement) {
            styleElement = document.createElement('style');
            styleElement.id = 'dynamic-terrain-styles';
            document.head.appendChild(styleElement);
        }
        this.styleElement = styleElement;
    }
    initializeProperties(styleObject) {
        for (const key in styleObject) {
            const style = styleObject[key];
            if (style.textColor) this.initStyle(style.textColor);
            if (style.bgColor) this.initStyle(style.bgColor);
            if (style.animate) this.initStyle(style);
        }
    }
    initStyle(property) {
        property.current = { h: property.h, s: property.s, l: property.l };
        for (const prop in property.animate) { property.animate[prop].direction = 1; }
    }
    // In backgroundManager.js

    update() {
        // --- 1. UPDATE & APPLY GLOBAL BACKGROUND STYLES ---
        this.animateProperty(this.styles.global.body);
        this.animateProperty(this.styles.global.terminal);

        const bodyStyle = this.styles.global.body.current;
        const termStyle1 = this.styles.global.terminal.current;
        const termStyle2 = { ...termStyle1, l: termStyle1.l - 2 };

        document.body.style.backgroundColor = `hsl(${bodyStyle.h}, ${bodyStyle.s}%, ${bodyStyle.l}%)`;
        document.getElementById('terminal').style.backgroundImage = 
            `linear-gradient(hsl(${termStyle1.h}, ${termStyle1.s}%, ${termStyle1.l}%), hsl(${termStyle2.h}, ${termStyle2.s}%, ${termStyle2.l}%))`;
        
        // --- 2. UPDATE & INJECT TERRAIN TEXT STYLES ---
        let newCssRules = '';
        for (const className in this.styles.terrain) {
            const style = this.styles.terrain[className];
            
            let textColorCss = 'transparent';
            if (style.textColor) {
                this.animateProperty(style.textColor);
                const tc = style.textColor.current;
                textColorCss = `hsl(${tc.h}, ${tc.s}%, ${tc.l}%)`;
            }

            // --- THIS IS THE NEW LOGIC ---
            // If the class is 'sand', override its text color with the page's background color.
            if (className === 'sand') {
                textColorCss = `hsl(${bodyStyle.h}, ${bodyStyle.s}%, ${bodyStyle.l}%)`;
            }
            // --- END OF NEW LOGIC ---

            let bgColorCss = 'transparent';
            if (style.bgColor) {
                this.animateProperty(style.bgColor);
                const bg = style.bgColor.current;
                bgColorCss = `hsl(${bg.h}, ${bg.s}%, ${bg.l}%)`;
            }
            newCssRules += `.${className} { color: ${textColorCss}; background-color: ${bgColorCss}; }`;
        }
        this.styleElement.innerHTML = newCssRules;
    }
    animateProperty(property) {
        if (!property || !property.animate) return;
        for (const prop in property.animate) {
            const anim = property.animate[prop];
            property.current[prop] += anim.speed * anim.direction;
            if (property.current[prop] > anim.max || property.current[prop] < anim.min) {
                anim.direction *= -1;
            }
        }
    }
}