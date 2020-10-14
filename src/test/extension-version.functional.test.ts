// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

'use strict';

// tslint:disable:no-any max-func-body-length

import { expect } from 'chai';
import * as fs from 'fs';
import * as glob from 'glob';
import * as path from 'path';
import { EXTENSION_ROOT_DIR } from '../client/common/constants';

suite('Extension localization files', () => {
    test('Load localization file', () => {
        const filesFailed: string[] = [];
        glob.sync('package.nls.*.json', { sync: true, cwd: EXTENSION_ROOT_DIR }).forEach((localizationFile) => {
            try {
                JSON.parse(fs.readFileSync(path.join(EXTENSION_ROOT_DIR, localizationFile)).toString());
            } catch {
                filesFailed.push(localizationFile);
            }
        });

        expect(filesFailed).to.be.lengthOf(0, `Failed to load JSON for ${filesFailed.join(', ')}`);
    });
});
