import Section from "../../componentes/Section/section";
import SectionTitle from "../../componentes/SectionTitle/SectionTitle";
import styles from './Seating.module.css';
import CardSofa from "../../componentes/CardSofa/CardSofa";
import Btn from "../../componentes/Btn/Btn";
import list from '../../assets/list.png';
import grid from '../../assets/grid_icon.png';
import { useState, useEffect } from 'react';


interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
}

function Seating() {
    const [isGrid, setIsGrid] = useState(true);
    const [otherProducts, setOtherProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [isOtherProductsVisible, setIsOtherProductsVisible] = useState(false);

    const handleSeeMore = () => {
        setIsOtherProductsVisible(true);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        setLoading(true);

        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setOtherProducts(data.slice(0, 5));
                setLoading(false);
            })
            .catch(error => {
                console.error('Erro ao buscar dados da API:', error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        console.log(`Visualização alterada para: ${isGrid ? 'Grid' : 'Lista'}`);
    }, [isGrid]);

    return (
        <>
            <Section>
                <SectionTitle align="left" title="All Seating" />
                <div className={styles.subTitle_wrapper}>
                    <p className={styles.subTitle}>
                        The main feature of any living room is always going to be the seating.
                        Pick and choose your seating styles to build the perfect place to relax.
                        Unwind by yourself, spend time with your family,
                        or entertain guests, all in ultimate comfort.
                    </p>
                </div>
            </Section>

            <Section padding="0 8rem 8rem 8rem">
                <div className={styles.list_grid}>
                    <img
                        className={`${styles.icon} ${isGrid ? styles.active : styles.muted}`}
                        src={grid} alt="grid"
                        onClick={() => setIsGrid(true)} />
                    <img
                        className={`${styles.icon} ${!isGrid ? styles.active : styles.muted}`}
                        src={list}
                        alt="list"
                        onClick={() => setIsGrid(false)}
                    />
                </div>

                <div className={isGrid ? styles.gridView : styles.listView}>
                    <CardSofa />
                    <CardSofa />
                    <CardSofa />
                    <CardSofa />
                    <CardSofa />
                    <CardSofa />
                    <CardSofa />
                    <CardSofa />
                    <CardSofa />
                </div>

                <Section padding="8rem 0 0rem 0">
                    <div className={styles.btn_Section}>
                        <Btn onClick={handleSeeMore} text="CLICAR AQUI PARA VER OUTROS PRODUTOS" />
                    </div>
                </Section>
            </Section>
            {isOtherProductsVisible && (
            <Section padding="0 8rem 8rem 8rem ">
                <SectionTitle align="left" title="Other Products" />
                <div className={styles.subTitle_wrapper}>
                    <p className={styles.subTitle}>
                        Explore other products in our store.
                    </p>
                </div>

                {loading ? (
                    <p>Loading other products...</p>
                ) : (
                    <div className={styles.otherProducts}>
                        {otherProducts.map((product) => (
                            <div key={product.id} className={styles.otherProductCard}>
                                <img src={product.image} alt={product.title} className={styles.productImage} />
                                <h3>{product.title}</h3>
                                <p>${product.price}</p>
                            </div>
                        ))}
                    </div>
                )}
            </Section>

           
            )}
        </>
    );
}

export default Seating;
