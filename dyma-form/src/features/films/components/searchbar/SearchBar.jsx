import React from "react";
import { Formik } from 'formik'
import apiMovie, {apiMovieMap} from "../../../../conf/api.movie";

function SearchBar(props) {

    const {updateMovies} = props

    const submit = (values, actions, props) => {
        const query = '?' + Object.keys(values).map(key => `${ key }=${values[key]}&`).join('')
        apiMovie.get('/search/movie' + query)
        .then( res => res.data.results)
        .then( moviesApi => {
          const movies = moviesApi.map(apiMovieMap)
           updateMovies(movies)
           actions.setSubmitting(false)
        })
        .catch( err => console.log(err));
    }

    return(
        <Formik
            onSubmit={submit}
            initialValues={ { query: '', language: 'en-US' } }
        >
        {({ handleSubmit, handleChange, handleBlur, isSubmitting}) => (
            <form className="d-flex flex-row p-2 m-2" onSubmit={handleSubmit} >
                <input name="query" className="flex-fill form-control mr-2" placeholder="Search" onChange={handleChange} onBlur={ handleBlur } />
                <select className="mr-2 form-control w-25 m-1" name="language" id="language" onChange={handleChange} onBlur={ handleBlur }>
                    <option value="en-US">Anglais</option>
                    <option value="fr-FR">Francais</option>
                </select>
                <button className="btn btn-small border btn-success" type="submit" disabled={isSubmitting} >Submit</button>
            </form>
        )}
            
        </Formik>
    )
}

export default SearchBar;