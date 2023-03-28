import styled from 'styled-components/native'; 

export const Page = styled.SafeAreaView`
  flex:1;
  align-items:center;
  padding-top: ${({paddingTop}) => paddingTop || '20px'}px;
`;
export const HeaderText = styled.Text`
  font-size:25px;
`;
export const Input = styled.TextInput`
  width:90%;
  height:50px;
  font-size:18px;
  background-color:#EEE;
  margin-top:20px;
  border-radius:10px;
  padding:10px;
`;
export const CalcButton = styled.Button`
  margin-top:10px;
`;
export const ResultArea = styled.View`
  width:90%;
  margin-top:30px;
  background-color:#EEE;
  padding:20px;
  justify-content:center;
  align-items:center;
  border-radius:20px;
  border-width:2px;
`;
export const ResultItemTitle = styled.Text`
  font-size:16px;
  font-weight:bold;
`;
export const ResultItem = styled.Text`
  font-size:23px;
  margin-bottom:30px;
`;
export const PctArea = styled.View`
  flex-direction:row;
  margin:20px;
`;
export const PctItem = styled.Button``;;