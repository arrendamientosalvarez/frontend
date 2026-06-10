export interface IEstate {
    consecutivo: number | string;
    imagenes: Image[];
    clase: string;
    tipo_servicio: string;
    area: number | string;
    municipio: string;
    barrio: string;
    precio_venta: string | number;
    precio: string | number;
    totalpaginas?: number;
    totalinmuebles?: number;
}

export interface Image {
    fotourl: string;
    alt: string;
}
