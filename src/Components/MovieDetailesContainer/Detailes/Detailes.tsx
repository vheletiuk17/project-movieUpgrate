import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../Hooks/reduxHooks";
import {movieActions} from "../../../Redux";
import {Detaile} from "../Detaile";

const Detailes = () => {
    const {detailes,id } = useAppSelector(state => state.movie);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getById({id}))
    }, [dispatch, id]);
    return (
        <div>
            {detailes && detailes.map(detaile => <Detaile key={detaile.id} detaile={detaile}/>)}
        </div>
    );
};

export {Detailes};