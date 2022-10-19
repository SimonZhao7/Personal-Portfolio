import { useState } from 'react'
// Firebase
import { db } from '../firebase'
import { addDoc, collection } from 'firebase/firestore'
// Icons
import { CheckIcon } from '@heroicons/react/solid'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e) => {
        if (!success) {
            e.preventDefault()

            await addDoc(collection(db, 'messages'), {
                name,
                email,
                message,
            })
            setSuccess(true)
            setName('')
            setEmail('')
            setMessage('')
        }
    }

    return (
        <section className='bg-gradient-to-b from-tea-green via-[#A8B888] to-[#A8B888] px-5 py-14 xs:p-14'>
            <h1 className='mb-5 text-center text-2xl uppercase tracking-widest text-green-900 underline decoration-underline xl:text-3xl'>
                Contact Me!
            </h1>
            <form
                className='mx-auto flex max-w-sm flex-col xl:max-w-xl'
                onSubmit={handleSubmit}
            >
                <label className='label'>Name</label>
                <input
                    className='form-input'
                    placeholder='E.g. John Doe'
                    required
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label className='label'>Email</label>
                <input
                    className='form-input'
                    required
                    type='email'
                    placeholder='E.g. jdoe@gmail.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label className='label'>Message</label>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={8}
                    placeholder='Enter your message here...'
                    className='mb-5 rounded-md border-2 border-gray-300 p-3 outline-none transition duration-150 ease-in hover:border-gray-900'
                ></textarea>
                <button
                    type='submit'
                    disabled={success}
                    className={`w-full rounded-md border-2 border-green-900 py-2 ${
                        success &&
                        'cursor-not-allowed bg-green-900 text-[#A8B888]'
                    } flex items-center justify-center uppercase tracking-widest text-green-900 transition duration-100 ease-in hover:bg-green-900 hover:text-[#A8B888]`}
                >
                    {success ? <CheckIcon className='h-6 w-6' /> : 'Send'}
                </button>
            </form>
        </section>
    )
}

export default Contact
