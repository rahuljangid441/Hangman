function getStyledElements(styleType){
    if(styleType === 'primary'){
        return 'bg-blue-500'
    }

    else if(styleType=== 'secondary'){
        return 'bg-gray-500'
    }

    else if(styleType === 'warning'){
        return 'bg-red-700'
    }

    else if(styleType === 'success'){
        return 'bg-green-700'
    }

}

export default getStyledElements;