import * as path from 'path';
import modulealies from 'module-alias';

const files = path.resolve(__dirname, '../..');

modulealies.addAliases({
    '@src': path.join(files, 'src'),
    '@test': path.join(files, 'test')
});