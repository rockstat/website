const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path')
const mkdirp = require('mkdirp');

const banner = `/**
 * generated automatically / don't change manually!
 */
`

module.exports.build = function (baseDir, data) {

    const setEnabled = (items, level = 1) => {
        let hasActiveItems = false;
        let hrefs = [];

        for (const item of items) {
            item.level = level;
            let hasActiveChild = false;
            let fileExists = false;


            if (item.items) {
                const childData = setEnabled(item.items, level + 1);
                if (childData.hasActiveItems) {
                    hasActiveChild = true;
                }
                if (item.level >= 2) {
                    item.hrefs = [...childData.hrefs]
                }

            }

            if (item.href) {
                hrefs.push(item.href)
                const fpath = path.join(baseDir, 'pages', item.href + '.mdx');
                // const fdir = path.dirname(fpath)
                // if (!fs.existsSync(fdir)) {
                //     mkdirp.sync(fdir)
                // }
                fileExists = fs.existsSync(fpath);
            }

            if (fileExists || hasActiveChild) {
                Object.assign(item, { enabled: true });
                hasActiveItems = true;
            }

        }
        return {
            hasActiveItems, hrefs
        }
    }
    setEnabled(data)
    return data;
}


module.exports.read = function(baseDir, file) {
    return yaml.load(fs.readFileSync(path.join(baseDir, file)));
}

module.exports.write = function (baseDir, file, data) {
    fs.writeFileSync(path.join(baseDir, file), `${banner}\nexport default ${JSON.stringify(data, undefined, 2)}`)
}
