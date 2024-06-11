
import React, {FC, useState} from 'react';
import css from './serchFrom.module.css'
import search from './icon/search.png'


type IProps = {
    onSubmit: CallableFunction
}

const SearchForm: FC<IProps> = ({onSubmit}) => {
    const [query, setQuery] = useState<string>('')


    return (
        <form className={css.searchForm} onSubmit={(e) => onSubmit(e)}>
            <input className={css.search_place} name='search' type="Text" placeholder={'Search'}
                   value={query} onChange={(e) => setQuery(e.target.value)}/>
          <img className={css.icon} src={search} alt=""/>
        </form>
    );
};

export {SearchForm};
