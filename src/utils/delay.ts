export const delay = (ms: number, value?: any): Promise<any> => {


    return new Promise((resolve) => {
        
        setTimeout(() => {
            resolve(value);
        }, ms);
    })


};
