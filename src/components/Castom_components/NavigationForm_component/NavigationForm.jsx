import React from 'react';
import FilterPOs from '../FilterPOs_component/FilterPOs';
import POList from '../POList_component/POList';
import classes from './NavigationForm.module.css'

const NavigationForm = ({posts, title, delite, filter, setFilter, setModal}) => {

   
    return (
        <div className={classes.NavigationForm}>
            <h1 style={{textAlign:'left', fontSize:30}}>{title}</h1>
            <hr style={{margin:'15px 0'}}/>
            <FilterPOs filter={filter} setFilter={setFilter} setModal={setModal}/>
            <hr style={{margin:'15px 0'}}/>
            <POList delite={delite} posts={posts}/>
                
        </div>
    );
};

export default NavigationForm;