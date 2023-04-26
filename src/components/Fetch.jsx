import React, { useState, createContext, useContext, useRef, useEffect } from 'react'
import { useAuth } from './Auth'

const FetchContext = createContext(null)

export const FetchProvider = ({ children }) => {
    const auth = useAuth()
    const [info, setInfo] = useState([])
    const [total, setTotal] = useState(0)
    const [cuisine, setCuisine] = useState('American')
    const [searched, setSearched] = useState(false)
    const [resultToggle, setResultToggle] = useState(true)

    const [title, setTitle] = useState('')
    const [ingredients, setIngredients] = useState([])
    const [image, setImage] = useState('')
    const [instruction, setInstruction] = useState('')
    const [analysed, setAnalysed] = useState([])
    const [isVege, setIsVege] = useState(false)
    const [diet, setDiet] = useState([])
    const [id, setId] = useState('')
    const [getResults, setGetResults] = useState(false)
    const [checkError, setCheckError] = useState(true)

    const searchInput = useRef('')
    const apikey = '&apiKey=b3d98a04c2f24627907100ab5ea6f727'
    const urlSearch = 'https://api.spoonacular.com/recipes/complexSearch'
    const getIdInit = useRef(false)

    const searchInputChange = (event) => {
        searchInput.current = event.target.value
    }

    const getCategory = (value) => {
        setCuisine(value)
    }

    const searchButtonClicked = () => {
        setSearched(prev => !prev)
        setResultToggle(true)
    }

    const getSearch = useEffect(() => {
        fetch(`${urlSearch}?query=${searchInput.current}&cuisine=${cuisine}&number=20${apikey}`)
            .then(res => res.json())
            .then(data => {
                setInfo(data.results)
                setTotal(data.totalResults)
            })
            .catch(error => console.log(error))
    }, [cuisine, searched])

    const checkAuth = (id) => {
        fetch("https://api.userfront.com/v0/self", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${auth.bearerToken}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setId(id)
                setGetResults(true)
                setCheckError(false)
            })
            .catch(error => {
                console.log(error)
                console.log('auth failed')
                setCheckError(true)
            })
        }

    const getId = useEffect(() => {
        if(getIdInit.current && !checkError){
            setResultToggle(false)
            fetch(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false${apikey}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setTitle(data.title)
                    setIngredients(data.extendedIngredients)
                    setImage(data.image)
                    setInstruction(data.instructions)
                    setAnalysed(data.analyzedInstructions[0].steps)
                    setIsVege(data.vegetarian)
                    setDiet(data.diets)
                })
                .catch(error => console.log(error))
        } else {
            getIdInit.current = true
        }
    }, [getResults])

    return (
        <FetchContext.Provider value={{ info, total, getSearch, checkAuth, searchInputChange, getCategory, searchButtonClicked, resultToggle, title, ingredients, image, instruction, analysed, isVege, diet }}>
            {children}
        </FetchContext.Provider>
    )
}

export const useFetch = () => {
    return useContext(FetchContext)
}