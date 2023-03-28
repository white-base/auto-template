
const { AutoTemplate } = require('../../../src/auto-template');

class Template extends AutoTemplate {
    constructor() {
        super(__dirname);
    }

    ready() {
        // 그룹 정의
        this.group.add('double', [
            { page: 'p1.html', context: 'group{0}/{1}/p1.html' },
            { page: 'p2.html', context: 'group{0}/p2.html' },
        ], ['', '']);

        this.attachGroup(this.group['all'], 'PRE_', '_SUF', [], 'ready');
    }
}

exports.AutoTemplate = Template;
