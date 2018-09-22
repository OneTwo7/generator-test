import pkg from '../package.json';

const baseDir = './Generator-Test.Website';

export default {
    pkg,
    baseDir,
    html: {
        dest: `${baseDir}/Mockup`,
        src: `${baseDir}/Mockup`
    },
    js: {
        dest: `${baseDir}/Content/Scripts`,
        src: `${baseDir}/Scripts`
    },
    css: {
        dest: `${baseDir}/Content/Styles`,
        src: `${baseDir}/Styles`
    }
};
