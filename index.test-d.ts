import {expectType} from 'tsd';
import isPathInside from './index.cjs';

expectType<boolean>(isPathInside('a/b/c', 'a/b'));
