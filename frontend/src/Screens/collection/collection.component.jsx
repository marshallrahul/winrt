import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
import Footer from "../../components/footer/footer.component";
import Loader from "../../components/loader/loader.component";
import Message from "../../components/message/message.component";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import {
  CollectionContainer,
  Container,
  Heading,
  Filter,
  Label,
  CheckBox,
  Box,
} from "./collection.style";
import { listProducts } from "../../redux/product/product.action";

const Collection = () => {
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.products);
  const { loading, products, error } = productDetails;

  const format = (val) => `₹` + val;
  const [filteredPrice, setFilteredPrice] = useState({ min: 1000, max: 5000 });

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Filter>
          <Heading>Price</Heading>
          <RangeSlider
            aria-label={`["min", "max"]`}
            defaultValue={[1000, 5000]}
            min={1000}
            max={7000}
            onChangeEnd={(val) =>
              setFilteredPrice({
                min: val[0],
                max: val[1],
              })
            }
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} boxSize={null} />
            <RangeSliderThumb index={1} boxSize={null} />
          </RangeSlider>
          <div>
            <NumberInput
              size="lg"
              maxW={44}
              defaultValue={filteredPrice.min}
              min={1000}
              max={7000}
              value={format(filteredPrice.min)}
              onChange={(val) =>
                setFilteredPrice((prevState) => ({
                  ...prevState,
                  min: Number(val),
                }))
              }
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <NumberInput
              size="lg"
              maxW={44}
              defaultValue={filteredPrice.max}
              min={1000}
              max={7000}
              value={format(filteredPrice.max)}
              onChange={(val) => {
                setFilteredPrice((prevState) => ({
                  ...prevState,
                  max: Number(val),
                }));
              }}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </div>
          <Box>
            <Heading>Types</Heading>
            <CheckBox>
              <input type="checkbox" id="mountain-bike" />
              <Label htmlFor="mountain-bike">Mountain Bike</Label>
            </CheckBox>
            <CheckBox>
              <input type="checkbox" id="road-bike" />
              <Label htmlFor="road-bike">Road Bike</Label>
            </CheckBox>
            <CheckBox>
              <input type="checkbox" id="folding-bike" />
              <Label htmlFor="folding-bike">Folding Bike</Label>
            </CheckBox>
            <CheckBox>
              <input type="checkbox" id="bmx" />
              <Label htmlFor="bmx"> BMX</Label>
            </CheckBox>
            <CheckBox>
              <input type="checkbox" id="touring-bike" />
              <Label htmlFor="touring-bike">Touring Bike</Label>
            </CheckBox>
          </Box>
        </Filter>
        <CollectionContainer>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message>{error}</Message>
          ) : (
            products.map((product) => (
              <CollectionItem
                key={product._id}
                prodId={product._id}
                product={product}
              />
            ))
          )}
        </CollectionContainer>
      </Container>
      <Footer />
    </>
  );
};

export default Collection;
