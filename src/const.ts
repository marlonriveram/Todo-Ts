export const TODO_FILTERS = { //alternativa mas segura a los enums
    ALL:'all',
    ACTIVED:'active',
    COMPLETED:'completed'
} as const // as const:propiedad de ts que pone todas las propiedades en readonly


export const FILTERS_BUTTONS = {
    [TODO_FILTERS.ALL]:{
        literal:'Todos',
        href:`/?filter=${TODO_FILTERS.ALL}`
    },

    [TODO_FILTERS.ACTIVED]:{
        literal:'Activos',
        href:`/?filter=${TODO_FILTERS.ACTIVED}`
    },

    [TODO_FILTERS.COMPLETED]:{
        literal:'Completos',
        href:`/?filter=${TODO_FILTERS.COMPLETED}`
    }

} as const

