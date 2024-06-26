import { NAMES, DESCRIPTIONS, MESSAGES } from './mocks.js';
import { createArrayOfPhotoCards } from './data.js';
import { showThumbnails } from './thumbnails.js';
import { listenThumbnails } from './gallery.js';


const picturesContent = createArrayOfPhotoCards(25, MESSAGES, NAMES, DESCRIPTIONS);
showThumbnails(picturesContent);
listenThumbnails(picturesContent);
