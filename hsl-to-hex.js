function hslToHex(h, s, l) {
    h /= 360;
    s /= 100;
    l /= 100;
    let r, g, b;
    if (s === 0) {
        r = g = b = l;
    } else {
        const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1/6) return p + (q - p) * 6 * t;
            if (t < 1/2) return q;
            if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }
    const toHex = x => {
        const hex = Math.round(x * 255).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// Function to replace HSL variables with HEX
function replaceHSLVariables(cssText) {
    const hslVars = [
        '--color-background',
        '--color-foreground',
        '--color-primary',
        '--color-primary-foreground',
        '--color-secondary',
        '--color-secondary-foreground',
        '--color-muted',
        '--color-muted-foreground',
        '--color-accent',
        '--color-accent-foreground',
        '--color-destructive',
        '--color-destructive-foreground',
        '--color-border',
        '--color-card',
        '--color-card-foreground'
    ];

    hslVars.forEach(varName => {
        const regex = new RegExp(`(${varName}:\\s*)(\\d+),\\s*(\\d+)%,\\s*(\\d+)%`, 'g');
        cssText = cssText.replace(regex, (match, prefix, h, s, l) => {
            const hexColor = hslToHex(Number(h), Number(s), Number(l));
            return `${prefix}${hexColor}`;
        });
    });

    return cssText;
}

// Export for Node.js or use as needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { hslToHex, replaceHSLVariables };
}
