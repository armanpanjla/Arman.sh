export const Container = ({children}) => {
    return (
        <div className="mx-auto sm:w-full lg:max-w-5xl  px-4 sm:px-6 lg:px-8  py-12">
            {children} </div>
    )
}

export const SmallContainer = ({ children }) => {
    return (
        <div className={`mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 py-12 ${className}`}>
            {children}
        </div>
    );
};

