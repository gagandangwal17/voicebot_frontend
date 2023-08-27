import css from './src/test.module.scss'

export default function testpage(){
    return(

        <div className={css.root}>
            <div className={css.container}>
                <div className="flex">
                    <div className={css.left}>
                        left
                    </div>
                    
                    <div className={css.right}>
                        left
                    </div>
                    
                    <div className={css.doc}>
                        doc
                    </div>
                </div>
            </div>
        </div>
        
    )
}