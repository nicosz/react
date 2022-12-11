import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';
import { Link } from 'react-router-dom';
import { categories } from '../../Data/data';

function SplitVariantExample() {
    let i = 0
    return (
        <>
            {['Danger'].map(
                (variant) => (
                    <SplitButton
                        key={variant}
                        id={`dropdown-split-variants-${variant}`}
                        variant={variant.toLowerCase()}
                        title="Category"
                    >
                        {categories.map((category) => (
                            <Dropdown.Item as={Link} key={i++} to={`/category/${category.toLowerCase()}`}>{category}</Dropdown.Item>
                        ))}
                    </SplitButton>
                ),
            )}
        </>
    );
}
export default SplitVariantExample;