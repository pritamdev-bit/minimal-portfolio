"use client"
import React, {useState, useEffect } from 'react'

const Quotes = () => {

    const [quote, setQuote] = useState({content: "I’ll take a potato chip… AND EAT IT!", character: "Light Yagami", anime: "Death Note"})

    const getQuote = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/quotes/random`)
        const quoteRes = await response.json()
        // console.log(quoteRes.data)
        try {
            if (!quoteRes.data) return
            setQuote({
                content: quoteRes.data.content,
                character: quoteRes.data.character.name,
                anime: quoteRes.data.anime.name
            })
        } catch (error) {
            console.log(error, quoteRes)
        }
    }

    useEffect(() => {
        getQuote()
    }, [])


    return (
        <div className="mx-auto md:w-[775px] w-full animate-fade-in-blur p-4">
            <div className="relative w-full px-4 py-10 border dark:border-dark-white-50 rounded-xl">
                <svg aria-hidden="true" width="105" height="78" className="absolute top-6 left-6 fill-zinc-100 dark:fill-white/20"><path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
                </svg>
                <p className="z-10 relative italic text-pretty font-mono font-medium text-zinc-500 dark:text-dark-white-300">
                    {quote.content}
                </p>
                <p className="text-right italic text-pretty font-mono text-highlight">
                    — {quote.character}, {quote.anime}
                </p>
            </div>
        </div>
    )
}

export default Quotes
