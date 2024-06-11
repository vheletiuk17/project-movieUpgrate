
import React, {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {IMovie} from "../../Interface/movieInterface";
import {searchService} from "../../Services/searchService";
import {Search} from "./Search";
import {SearchForm} from "./SearchForm";
import css from './searchs.module.css'
import prev from './icon/prev.png'
import next from './icon/next.png'



const Searchs = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [totalPages, setTotalPages] = useState<number>(1)
    const [params, setParams] = useSearchParams({page: '1', query: ''});

    const page: string = params.get('page') || '1';
    const query: string = params.get('query') || '';

    const searchMovies = (queryParam: string, pageParam: string) => {
        searchService.getMoviesSearchForm(queryParam, pageParam)
            .then(({data}) => {
                setMovies(data.results);
                setTotalPages(data.page);
            });
    };

    useEffect(() => {
        if (query) {
            searchMovies(query, page);
        } else {
            searchService.getTrendsMovies(query, page).then(({data}) => {
                setMovies(data.results);
                setTotalPages(data.page);
            })
        }
    }, [query, page]);


    const handlePagePrev = () => {
        setParams(prev => {
            prev.set('page', `${+page - 1}`)
            return prev
        })
    }

    const handlePageNext = () => {
        setParams(prev => {
            prev.set('page', `${+page + 1}`)
            return prev
        })
    }
    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;

        if (form && form.elements) {
            const query: string = (form.elements.namedItem('search') as HTMLInputElement)?.value || '';
            setParams(prev => {
                prev.set('query', query);
                prev.set('page', '1');
                return prev;
            });
        }
    }

    return (
        <div className={css.Content}>
            <div className={css.Form}>
                <SearchForm onSubmit={handleSearchSubmit}/>
            </div>
            <div className={css.title}>
                Trending movie
            </div>
            <div className={css.searchContent}>
                {movies.map(trendsMovie => <Search key={trendsMovie.id} trendsMovie={trendsMovie}/>)}
            </div>
            <div className={css.Page}>
                <button onClick={handlePagePrev} disabled={page === '1'}><img className={css.icon} src={prev} alt=""/> </button>
                <span> Page: {page}</span>
                <button onClick={handlePageNext} disabled={page === `${totalPages}`}><img className={css.icon} src={next} alt=""/> </button>
            </div>
        </div>
    );
};

export {Searchs};
