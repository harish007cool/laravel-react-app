import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import CryptoJS from 'crypto-js';
import axios from 'axios';
import { STATUS_CODES, CONSTANT_VALUE } from '../../Constants/constants';


export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });
    const submit = async (e) => {
        e.preventDefault();
    
        const rawKey = CONSTANT_VALUE.CRYPTOJS_RAWKEY; // Use 16 characters here; we'll pad to 32 for AES-256
        const iv = CONSTANT_VALUE.CRYPTOJS_IV; // 16 bytes
        const key = CryptoJS.enc.Utf8.parse(rawKey.padEnd(32, '\0')); // Null byte padding
        const ivWordArray = CryptoJS.enc.Utf8.parse(iv); // 16-byte IV
    
        // Encrypt the data
        const encrypted = CryptoJS.AES.encrypt(
            JSON.stringify(data),
            key,
            {
                iv: ivWordArray,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7,
            }
        ).toString(); // Full Base64 output
    
        try {
            const response = await axios.post('/login', { payload: encrypted });
            if (response.status === 200) {
                window.location.href = route('/dashboard') ;
            } else {
                window.location.href = route('/login') ;
            }
        } catch (error) {
            console.error('Error during login:', error);
            if (error.response && error.response.data) {
                console.error('Server error message:', error.response.data.message);
            } else {
                console.error('A network error occurred. Please try again.');
            }
        }
    };
    
    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}
            <div className='parent-container mr-6 ml-6'>
                <div className="boday-box" >

                    <form onSubmit={submit}>
                        <div>
                            <InputLabel htmlFor="email" value="Email" />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)}
                            />

                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="password" value="Password" />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                            />

                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="mt-4 block">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) =>
                                        setData('remember', e.target.checked)
                                    }
                                />
                                <span className="ms-2 text-sm text-gray-600">
                                    Remember me
                                </span>
                            </label>
                        </div>

                        <div className="mt-4 flex items-center justify-end">
                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Forgot your password?
                                </Link>
                            )}

                            <PrimaryButton className="ms-4" disabled={processing}>
                                Log in
                            </PrimaryButton>
                        </div>
                    </form>

                </div>
            </div>

        </GuestLayout>
    );
}
