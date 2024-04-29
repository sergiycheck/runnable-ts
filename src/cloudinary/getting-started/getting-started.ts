const path = require('path');

process.env['NODE_CONFIG_DIR'] = path.join(__dirname, '..', 'config');
import { v2 as cloudinary } from 'cloudinary';
const config = require('config');

export async function clodinaryGettingStarted() {
  const cloudinaryConfig = config.get('cloudinary') as any;

  cloudinary.config({
    cloud_name: cloudinaryConfig.cloud_name,
    api_key: cloudinaryConfig.api_key,
    api_secret: cloudinaryConfig.api_secret,
  });

  cloudinary.uploader.upload(
    'https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg',
    { public_id: 'olympic_flag' },
    function (error, result) {
      console.log(result);
    }
  );
}
