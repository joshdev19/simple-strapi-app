export type PropTypes = {
    id?: ( number | string );
    title: string;
    description: string;
}

export type DataTypes <T> = {
    data: T & PropTypes
}