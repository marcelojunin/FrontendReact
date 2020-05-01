import Axios from "axios";
import * as ENV from './../environment/environment';
import * as PATH from './../helpers/constants';
import * as REDUCERS from './../helpers/reducers';
import { initialize } from "redux-form";

export function getAllSubcategories() {
    const req = Axios.get(`${ENV.API_URL}${PATH.SUBCATEGORIES}`);
    return {
        type: REDUCERS.SUBCATEGORIES_FETCHED,
        payload: req
    };
}

export function saveSubcategory(subcategory) {
    const req = Axios.post(`${ENV.API_URL}${PATH.SUBCATEGORIES}`, subcategory);
    return {
        type: REDUCERS.SUBCATEGORY_CREATED,
        payload: req
    };
}

export function updateSubategory(subcategory, id) {
    const req = Axios.put(`${ENV.API_URL}${PATH.SUBCATEGORIES}/${id}`, subcategory);
    return {
        type: REDUCERS.SUBCATEGORY_UPDATED,
        payload: req
    };
}

export function deleteSubcategory(id) {
    const req = Axios.delete(`${ENV.API_URL}${PATH.SUBCATEGORIES}/${id}`);
    return {
        type: REDUCERS.SUBCATEGORY_DELETED,
        payload: req
    };
}

export function findSubcategoryByParams(params) {
    const req = Axios.post(
        `${ENV.API_URL}${PATH.SUBCATEGORIES}/findByNameAndCategory`, params);
    return {
        type: REDUCERS.SUBCATEGORIES_FETCHED_BY_PARAMS,
        payload: req
    }
}

export function setSubcategoryId(id) {
    return {
        type: REDUCERS.SET_SUBCATEGORYID,
        payload: id
    };
}

export function setSubcategoryModal(show) {
    return {
        type: REDUCERS.SET_SUBCATEGORY_MODAL,
        payload: show
    }
}

export function resetSubcategorySearchList() {
    return {
        type: REDUCERS.SET_SUBCATEGORY_SEARCH_LIST,
        payload: []
    }
}

export function resetSubcategorySearchForm() {
    return [
        initialize('subcategorySearchForm')
    ];
}

export function setSubcategoryForm(subcategory) {
    return [
        initialize('subcategoryForm', subcategory)
    ];
}