It is used with forwardRef(component);

component = (props, ref) => {
    useImperativeHandle(
        ref,
        () => {
            return {
                a() {
                    console.log("Something");
                }
            }
        },
        [third],
    )
}