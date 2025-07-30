import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import CryptoJS from 'crypto-js';
import axios from 'axios';
import { STATUS_CODES, CONSTANT_VALUE } from '../../Constants/constants';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = async (e) => {
        e.preventDefault();

        try {
            const rawKey = CONSTANT_VALUE.CRYPTOJS_RAWKEY; // 16 chars; pad to 32
            const iv = CONSTANT_VALUE.CRYPTOJS_IV; // 16 bytes
            const key = CryptoJS.enc.Utf8.parse(rawKey.padEnd(32, '\0')); // Pad to 32
            const ivWordArray = CryptoJS.enc.Utf8.parse(iv); // 16-byte IV

            const encrypted = CryptoJS.AES.encrypt(
                JSON.stringify(data),
                key,
                {
                    iv: ivWordArray,
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7,
                }
            ).toString(); // Encrypted string

            const response = await axios.post('/register', {
                payload: encrypted
            });
            if (response.status === 200 && response.data.redirect_url) {
                console.log('Redirecting to:', response.data.redirect_url);
                window.location.href = response.data.redirect_url;
            } else {
                // Handle non-redirect cases or display success message
                window.location.reload();
                //window.location.href = 'http://127.0.0.1:8000/dashboard';
                console.log('Response data:', response.data);
            }
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <GuestLayout>
            <Head title="Register" />
            <div className='parent-container mr-6 ml-6 mb-6 mt-6'>
                <div className="boday-box" >
                    <form onSubmit={submit}>
                        <div>
                            <InputLabel htmlFor="name" value="Name" />

                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                            />

                            <InputError message={errors.name} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="email" value="Email" />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                onChange={(e) => setData('email', e.target.value)}
                                required
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
                                autoComplete="new-password"
                                onChange={(e) => setData('password', e.target.value)}
                                required
                            />

                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel
                                htmlFor="password_confirmation"
                                value="Confirm Password"
                            />

                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData('password_confirmation', e.target.value)
                                }
                                required
                            />

                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4 flex items-center justify-end">
                            <Link
                                href={route('login')}
                                className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Already registered?
                            </Link>

                            <PrimaryButton className="ms-4" disabled={processing}>
                                Register
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>

        </GuestLayout>
    );
}
