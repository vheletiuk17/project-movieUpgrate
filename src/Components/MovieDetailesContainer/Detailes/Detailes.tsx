import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../Hooks/reduxHooks";
import {movieActions} from "../../../Redux";
import {Detaile} from "../Detaile";
import {useParams} from "react-router";

const Detailes = () => {
    const {detailes } = useAppSelector(state => state.movie);
    const {id} = useParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (id) {
            dispatch(movieActions.getById({id: +id}))
        }
    }, [dispatch, id]);
    return (
        <div>
            {detailes && <Detaile key={detailes.id} detaile={detailes}/>}
        </div>
    );
};

export {Detailes};