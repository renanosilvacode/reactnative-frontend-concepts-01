import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',
});

export default api;
/**
 * ios with emulator: localhost
 * ios with device: IP pc
 * android with emulator: localhost (adb reverse)
 *                        10.0.2.2 (Android Studio)
 *                        10.0.3.2 (Genymotion)
 * android with device: IP pc
 */