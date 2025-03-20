const fs = require('fs');
const path = require('path');

const faRoot = path.resolve(__dirname, './node_modules/@fortawesome/fontawesome-free');
const targetRoot = path.resolve(__dirname, './src/fonts');

const copy = (src, dest) => {
    console.log('Copying ' + src + ' to ' + dest);
    fs.copyFile(path.resolve(__dirname, faRoot + src), path.resolve(__dirname, targetRoot + dest), (err) => {
        if (err) {
            console.log(err);
        }
    });
}

copy('/webfonts/fa-solid-900.ttf', '/fa-solid/fa-solid.ttf');
copy('/webfonts/fa-solid-900.woff2', '/fa-solid/fa-solid.woff2');

const families = require('./node_modules/@fortawesome/fontawesome-free/metadata/icon-families.json');

const solidIcons = {};
for (const key in families) {
    const icon = families[key];
    if (icon.familyStylesByLicense.free) {
        icon.familyStylesByLicense.free.forEach(family => {
            if (family.family === 'classic' && family.style === 'solid') {
                solidIcons[key] = icon.unicode;
            }
        });
    }
}

fs.writeFile(path.resolve(__dirname, targetRoot + '/fa-solid/fa-solid.json'), JSON.stringify(solidIcons), (err) => {
    if (err) {
        console.log(err);
    }
});

copy('/webfonts/fa-regular-400.ttf', '/fa-regular/fa-regular.ttf');
copy('/webfonts/fa-regular-400.woff2', '/fa-regular/fa-regular.woff2');

const regularIcons = {};
for (const key in families) {
    const icon = families[key];
    if (icon.familyStylesByLicense.free) {
        icon.familyStylesByLicense.free.forEach(family => {
            if (family.family === 'classic' && family.style === 'regular') {
                regularIcons[key] = icon.unicode;
            }
        });
    }
}

fs.writeFile(path.resolve(__dirname, targetRoot + '/fa-regular/fa-regular.json'), JSON.stringify(regularIcons), (err) => {
    if (err) {
        console.log(err);
    } 
});

copy('/webfonts/fa-brands-400.ttf', '/fa-brands/fa-brands.ttf');
copy('/webfonts/fa-brands-400.woff2', '/fa-brands/fa-brands.woff2');

const brandIcons = {};
for (const key in families) {
    const icon = families[key];
    if (icon.familyStylesByLicense.free) {
        icon.familyStylesByLicense.free.forEach(family => {
            if (family.family === 'classic' && family.style === 'brands') {
                brandIcons[key] = icon.unicode;
            }
        });
    }
}

fs.writeFile(path.resolve(__dirname, targetRoot + '/fa-brands/fa-brands.json'), JSON.stringify(brandIcons), (err) => {
    if (err) {
        console.log(err);
    }
});