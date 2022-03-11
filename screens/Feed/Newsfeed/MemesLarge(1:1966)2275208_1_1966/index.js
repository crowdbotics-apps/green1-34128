import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_1_1967}>
        <View style={styles.View_1_1968}>
          <View style={styles.View_1_1969}>
            <View style={styles.View_1_1970}>
              <View style={styles.View_1_1971}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3df/7866/7eb2bb6481c3bf5c40a8e1018a98e11d"
                  }}
                  style={styles.ImageBackground_1_1972}
                />
                <View style={styles.View_1_1974}>
                  <View style={styles.View_1_1975}>
                    <View style={styles.View_1_1976}>
                      <Text style={styles.Text_1_1976}>Tiana Siphron</Text>
                    </View>
                    <View style={styles.View_1_1977}>
                      <Text style={styles.Text_1_1977}>@Madelyn</Text>
                    </View>
                  </View>
                  <View style={styles.View_1_1978}>
                    <Text style={styles.Text_1_1978}>10 minutes ago</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_1_1979}>
                <View style={styles.View_I1_1979_1_1921}>
                  <Text style={styles.Text_I1_1979_1_1921}>
                    Lorem ipsum dolor sit amet, consectetur dolor sit amet,
                    consectetur{" "}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_1_1980}>
              <View style={styles.View_1_1981}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ed0/2bf0/83953663fe0d0f2328112b848aa741d5"
                  }}
                  style={styles.ImageBackground_1_1982}
                />
                <View style={styles.View_1_1983}>
                  <Text style={styles.Text_1_1983}>00:15</Text>
                </View>
              </View>
              <View style={styles.View_1_1984}>
                <View style={styles.View_1_1985}>
                  <View style={styles.View_1_1986}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90b9/000e/c7eaee0e411836792fd7fc04c167d686"
                      }}
                      style={styles.ImageBackground_I1_1986_3110_57363}
                    />
                    <View style={styles.View_I1_1986_3110_57364}>
                      <Text style={styles.Text_I1_1986_3110_57364}>54</Text>
                    </View>
                  </View>
                  <View style={styles.View_1_1987}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84f4/0ebb/4cd9ef62b3aff227be87a6c116b7cfde"
                      }}
                      style={styles.ImageBackground_1_1988}
                    />
                    <View style={styles.View_1_1989}>
                      <Text style={styles.Text_1_1989}>54</Text>
                    </View>
                  </View>
                  <View style={styles.View_1_1990}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d943/c894/3a302e855f42dfba9bee6db21640c284"
                      }}
                      style={styles.ImageBackground_1_1991}
                    />
                    <View style={styles.View_1_1992}>
                      <Text style={styles.Text_1_1992}>54</Text>
                    </View>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/998c/389f/c0b1676ade50bc8a362ad37d329bdba3"
                  }}
                  style={styles.ImageBackground_1_1993}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_1_1994}>
          <View style={styles.View_1_1995}>
            <View style={styles.View_1_1996}>
              <View style={styles.View_1_1997}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/40f6/e495/07b8c1c59dcbad72b3073f4130855c87"
                  }}
                  style={styles.ImageBackground_1_1998}
                />
                <View style={styles.View_1_2000}>
                  <View style={styles.View_1_2001}>
                    <View style={styles.View_1_2002}>
                      <Text style={styles.Text_1_2002}>Cooper Westervelt</Text>
                    </View>
                    <View style={styles.View_1_2003}>
                      <Text style={styles.Text_1_2003}>@Madelyn</Text>
                    </View>
                  </View>
                  <View style={styles.View_1_2004}>
                    <Text style={styles.Text_1_2004}>10 minutes ago</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_1_2005}>
                <Text style={styles.Text_1_2005}>
                  Scientists say marijuana lowers your body temperature. In
                  other words, smoking pot does make you cool!
                </Text>
              </View>
            </View>
            <View style={styles.View_1_2006}>
              <View style={styles.View_1_2007}>
                <View style={styles.View_1_2008}>
                  <View style={styles.View_1_2009}>
                    <Text style={styles.Text_1_2009}>
                      Scientists say marijuana lowers  your body temperature.
                    </Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fd7/970e/fb843a185b836c16e5a020dc1da039f6"
                  }}
                  style={styles.ImageBackground_1_2010}
                />
                <View style={styles.View_1_2011}>
                  <View style={styles.View_1_2012}>
                    <Text style={styles.Text_1_2012}>
                      In other words, smoking pot  does make you cool!
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_1_2013}>
                <View style={styles.View_1_2014}>
                  <View style={styles.View_1_2015}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90b9/000e/c7eaee0e411836792fd7fc04c167d686"
                      }}
                      style={styles.ImageBackground_I1_2015_3110_57363}
                    />
                    <View style={styles.View_I1_2015_3110_57364}>
                      <Text style={styles.Text_I1_2015_3110_57364}>54</Text>
                    </View>
                  </View>
                  <View style={styles.View_1_2016}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84f4/0ebb/4cd9ef62b3aff227be87a6c116b7cfde"
                      }}
                      style={styles.ImageBackground_1_2017}
                    />
                    <View style={styles.View_1_2018}>
                      <Text style={styles.Text_1_2018}>54</Text>
                    </View>
                  </View>
                  <View style={styles.View_1_2019}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d943/c894/3a302e855f42dfba9bee6db21640c284"
                      }}
                      style={styles.ImageBackground_1_2020}
                    />
                    <View style={styles.View_1_2021}>
                      <Text style={styles.Text_1_2021}>54</Text>
                    </View>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/998c/389f/c0b1676ade50bc8a362ad37d329bdba3"
                  }}
                  style={styles.ImageBackground_1_2022}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_1_2023}>
          <View style={styles.View_1_2024}>
            <View style={styles.View_1_2025}>
              <View style={styles.View_1_2026}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2266/ef0e/9af1190a649cead01ac5a559bb708c07"
                  }}
                  style={styles.ImageBackground_1_2027}
                />
                <View style={styles.View_1_2029}>
                  <View style={styles.View_1_2030}>
                    <View style={styles.View_1_2031}>
                      <Text style={styles.Text_1_2031}>Maren Lipshutz</Text>
                    </View>
                    <View style={styles.View_1_2032}>
                      <Text style={styles.Text_1_2032}>@Madelyn</Text>
                    </View>
                  </View>
                  <View style={styles.View_1_2033}>
                    <Text style={styles.Text_1_2033}>10 minutes ago</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_1_2034}>
                <Text style={styles.Text_1_2034}>
                  Dhood, I thought INSTA GRAM was a weed delivery service
                </Text>
              </View>
            </View>
            <View style={styles.View_1_2035}>
              <View style={styles.View_1_2036}>
                <View style={styles.View_1_2037}>
                  <View style={styles.View_1_2038}>
                    <Text style={styles.Text_1_2038}>
                      “Dhood, I thought INSTA GRAM was a weed delivery service”
                    </Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83e7/2a6c/67e18b211210f0b473aef8e9ce7bf33a"
                  }}
                  style={styles.ImageBackground_1_2039}
                />
              </View>
              <View style={styles.View_1_2040}>
                <View style={styles.View_1_2041}>
                  <View style={styles.View_1_2042}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90b9/000e/c7eaee0e411836792fd7fc04c167d686"
                      }}
                      style={styles.ImageBackground_I1_2042_3110_57363}
                    />
                    <View style={styles.View_I1_2042_3110_57364}>
                      <Text style={styles.Text_I1_2042_3110_57364}>54</Text>
                    </View>
                  </View>
                  <View style={styles.View_1_2043}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84f4/0ebb/4cd9ef62b3aff227be87a6c116b7cfde"
                      }}
                      style={styles.ImageBackground_1_2044}
                    />
                    <View style={styles.View_1_2045}>
                      <Text style={styles.Text_1_2045}>54</Text>
                    </View>
                  </View>
                  <View style={styles.View_1_2046}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d943/c894/3a302e855f42dfba9bee6db21640c284"
                      }}
                      style={styles.ImageBackground_1_2047}
                    />
                    <View style={styles.View_1_2048}>
                      <Text style={styles.Text_1_2048}>54</Text>
                    </View>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/998c/389f/c0b1676ade50bc8a362ad37d329bdba3"
                  }}
                  style={styles.ImageBackground_1_2049}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_1_2050}>
          <View style={styles.View_1_2051}>
            <View style={styles.View_1_2052}>
              <View style={styles.View_1_2053}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e78/c24e/edc81907603c9ea712b9ed172ca5a9a2"
                  }}
                  style={styles.ImageBackground_1_2054}
                />
                <View style={styles.View_1_2056}>
                  <View style={styles.View_1_2057}>
                    <View style={styles.View_1_2058}>
                      <Text style={styles.Text_1_2058}>Tiana Siphron</Text>
                    </View>
                    <View style={styles.View_1_2059}>
                      <Text style={styles.Text_1_2059}>@Madelyn</Text>
                    </View>
                  </View>
                  <View style={styles.View_1_2060}>
                    <Text style={styles.Text_1_2060}>10 minutes ago</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_1_2061}>
                <Text style={styles.Text_1_2061}>
                  GOD MADE WEED, MAN MADE BEER, IN GOD WE TRUST
                </Text>
              </View>
            </View>
            <View style={styles.View_1_2062}>
              <View style={styles.View_1_2063}>
                <View style={styles.View_1_2064}>
                  <View style={styles.View_1_2065}>
                    <Text style={styles.Text_1_2065}>
                      GOD MADE WEED, MAN MADE BEER,
                    </Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f1d/2c2d/31ec64fcb84b368899ab3cadb8eb4312"
                  }}
                  style={styles.ImageBackground_1_2066}
                />
                <View style={styles.View_1_2067}>
                  <View style={styles.View_1_2068}>
                    <Text style={styles.Text_1_2068}>IN GOD WE TRUST</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_1_2069}>
                <View style={styles.View_1_2070}>
                  <View style={styles.View_1_2071}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90b9/000e/c7eaee0e411836792fd7fc04c167d686"
                      }}
                      style={styles.ImageBackground_I1_2071_3110_57363}
                    />
                    <View style={styles.View_I1_2071_3110_57364}>
                      <Text style={styles.Text_I1_2071_3110_57364}>54</Text>
                    </View>
                  </View>
                  <View style={styles.View_1_2072}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84f4/0ebb/4cd9ef62b3aff227be87a6c116b7cfde"
                      }}
                      style={styles.ImageBackground_1_2073}
                    />
                    <View style={styles.View_1_2074}>
                      <Text style={styles.Text_1_2074}>54</Text>
                    </View>
                  </View>
                  <View style={styles.View_1_2075}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d943/c894/3a302e855f42dfba9bee6db21640c284"
                      }}
                      style={styles.ImageBackground_1_2076}
                    />
                    <View style={styles.View_1_2077}>
                      <Text style={styles.Text_1_2077}>54</Text>
                    </View>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/998c/389f/c0b1676ade50bc8a362ad37d329bdba3"
                  }}
                  style={styles.ImageBackground_1_2078}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_1_2079}>
          <View style={styles.View_1_2080}>
            <View style={styles.View_1_2081}>
              <View style={styles.View_1_2082}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3df/7866/7eb2bb6481c3bf5c40a8e1018a98e11d"
                  }}
                  style={styles.ImageBackground_1_2083}
                />
                <View style={styles.View_1_2085}>
                  <View style={styles.View_1_2086}>
                    <View style={styles.View_1_2087}>
                      <Text style={styles.Text_1_2087}>Marley Levin</Text>
                    </View>
                    <View style={styles.View_1_2088}>
                      <Text style={styles.Text_1_2088}>@Madelyn</Text>
                    </View>
                  </View>
                  <View style={styles.View_1_2089}>
                    <Text style={styles.Text_1_2089}>10 minutes ago</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_1_2090}>
                <Text style={styles.Text_1_2090}>
                  If laughter is the best medicine and weed makes you laugh,
                  then is weed the best medicine?
                </Text>
              </View>
            </View>
            <View style={styles.View_1_2091}>
              <View style={styles.View_1_2092}>
                <View style={styles.View_1_2093}>
                  <View style={styles.View_1_2094}>
                    <Text style={styles.Text_1_2094}>
                      If laughter is the best medicine and weed makes you laugh
                    </Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/292d/acab/dbcc557531820a8565e9bef086773709"
                  }}
                  style={styles.ImageBackground_1_2095}
                />
                <View style={styles.View_1_2096}>
                  <View style={styles.View_1_2097}>
                    <Text style={styles.Text_1_2097}>
                      then is weed the best medicine?
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_1_2098}>
                <View style={styles.View_1_2099}>
                  <View style={styles.View_1_2100}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90b9/000e/c7eaee0e411836792fd7fc04c167d686"
                      }}
                      style={styles.ImageBackground_I1_2100_3110_57363}
                    />
                    <View style={styles.View_I1_2100_3110_57364}>
                      <Text style={styles.Text_I1_2100_3110_57364}>54</Text>
                    </View>
                  </View>
                  <View style={styles.View_1_2101}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84f4/0ebb/4cd9ef62b3aff227be87a6c116b7cfde"
                      }}
                      style={styles.ImageBackground_1_2102}
                    />
                    <View style={styles.View_1_2103}>
                      <Text style={styles.Text_1_2103}>54</Text>
                    </View>
                  </View>
                  <View style={styles.View_1_2104}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d943/c894/3a302e855f42dfba9bee6db21640c284"
                      }}
                      style={styles.ImageBackground_1_2105}
                    />
                    <View style={styles.View_1_2106}>
                      <Text style={styles.Text_1_2106}>54</Text>
                    </View>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/998c/389f/c0b1676ade50bc8a362ad37d329bdba3"
                  }}
                  style={styles.ImageBackground_1_2107}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_1_2108}>
          <View style={styles.View_1_2109}>
            <View style={styles.View_1_2110}>
              <View style={styles.View_1_2111}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3df/7866/7eb2bb6481c3bf5c40a8e1018a98e11d"
                  }}
                  style={styles.ImageBackground_1_2112}
                />
                <View style={styles.View_1_2114}>
                  <View style={styles.View_1_2115}>
                    <View style={styles.View_1_2116}>
                      <Text style={styles.Text_1_2116}>Marley Levin</Text>
                    </View>
                    <View style={styles.View_1_2117}>
                      <Text style={styles.Text_1_2117}>@Madelyn</Text>
                    </View>
                  </View>
                  <View style={styles.View_1_2118}>
                    <Text style={styles.Text_1_2118}>10 minutes ago</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_1_2119}>
                <Text style={styles.Text_1_2119}>
                  Me: Watching the “Make your own pot edible munchies”
                  tutorials.
                </Text>
              </View>
            </View>
            <View style={styles.View_1_2120}>
              <View style={styles.View_1_2121}>
                <View style={styles.View_1_2122}>
                  <View style={styles.View_1_2123}>
                    <Text style={styles.Text_1_2123}>
                      Me: Watching the “Make your own pot edible munchies”
                      tutorials.
                    </Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc56/38a3/71e3a015e77d754d4a91ed96e36b090b"
                  }}
                  style={styles.ImageBackground_1_2124}
                />
              </View>
              <View style={styles.View_1_2125}>
                <View style={styles.View_1_2126}>
                  <View style={styles.View_1_2127}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90b9/000e/c7eaee0e411836792fd7fc04c167d686"
                      }}
                      style={styles.ImageBackground_I1_2127_3110_57363}
                    />
                    <View style={styles.View_I1_2127_3110_57364}>
                      <Text style={styles.Text_I1_2127_3110_57364}>54</Text>
                    </View>
                  </View>
                  <View style={styles.View_1_2128}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84f4/0ebb/4cd9ef62b3aff227be87a6c116b7cfde"
                      }}
                      style={styles.ImageBackground_1_2129}
                    />
                    <View style={styles.View_1_2130}>
                      <Text style={styles.Text_1_2130}>54</Text>
                    </View>
                  </View>
                  <View style={styles.View_1_2131}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d943/c894/3a302e855f42dfba9bee6db21640c284"
                      }}
                      style={styles.ImageBackground_1_2132}
                    />
                    <View style={styles.View_1_2133}>
                      <Text style={styles.Text_1_2133}>54</Text>
                    </View>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/998c/389f/c0b1676ade50bc8a362ad37d329bdba3"
                  }}
                  style={styles.ImageBackground_1_2134}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_1_2135}>
          <View style={styles.View_1_2136}>
            <View style={styles.View_1_2137}>
              <View style={styles.View_1_2138}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3df/7866/7eb2bb6481c3bf5c40a8e1018a98e11d"
                  }}
                  style={styles.ImageBackground_1_2139}
                />
                <View style={styles.View_1_2141}>
                  <View style={styles.View_1_2142}>
                    <View style={styles.View_1_2143}>
                      <Text style={styles.Text_1_2143}>Marley Levin</Text>
                    </View>
                    <View style={styles.View_1_2144}>
                      <Text style={styles.Text_1_2144}>@Madelyn</Text>
                    </View>
                  </View>
                  <View style={styles.View_1_2145}>
                    <Text style={styles.Text_1_2145}>10 minutes ago</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_1_2146}>
                <Text style={styles.Text_1_2146}>
                  When you thought it was the last one and your buddy brings a
                  newly rolled joint
                </Text>
              </View>
            </View>
            <View style={styles.View_1_2147}>
              <View style={styles.View_1_2148}>
                <View style={styles.View_1_2149}>
                  <View style={styles.View_1_2150}>
                    <Text style={styles.Text_1_2150}>
                      when you thought it was the last one
                    </Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce21/d75b/468be818d36c61b0507711e082d73cf7"
                  }}
                  style={styles.ImageBackground_1_2151}
                />
                <View style={styles.View_1_2152}>
                  <View style={styles.View_1_2153}>
                    <Text style={styles.Text_1_2153}>
                      and your buddy brings a newly rolled joint
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_1_2154}>
                <View style={styles.View_1_2155}>
                  <View style={styles.View_1_2156}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90b9/000e/c7eaee0e411836792fd7fc04c167d686"
                      }}
                      style={styles.ImageBackground_I1_2156_3110_57363}
                    />
                    <View style={styles.View_I1_2156_3110_57364}>
                      <Text style={styles.Text_I1_2156_3110_57364}>54</Text>
                    </View>
                  </View>
                  <View style={styles.View_1_2157}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84f4/0ebb/4cd9ef62b3aff227be87a6c116b7cfde"
                      }}
                      style={styles.ImageBackground_1_2158}
                    />
                    <View style={styles.View_1_2159}>
                      <Text style={styles.Text_1_2159}>54</Text>
                    </View>
                  </View>
                  <View style={styles.View_1_2160}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d943/c894/3a302e855f42dfba9bee6db21640c284"
                      }}
                      style={styles.ImageBackground_1_2161}
                    />
                    <View style={styles.View_1_2162}>
                      <Text style={styles.Text_1_2162}>54</Text>
                    </View>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/998c/389f/c0b1676ade50bc8a362ad37d329bdba3"
                  }}
                  style={styles.ImageBackground_1_2163}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_1_2164}>
          <View style={styles.View_1_2165}>
            <View style={styles.View_1_2166}>
              <View style={styles.View_1_2167}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3df/7866/7eb2bb6481c3bf5c40a8e1018a98e11d"
                  }}
                  style={styles.ImageBackground_1_2168}
                />
                <View style={styles.View_1_2170}>
                  <View style={styles.View_1_2171}>
                    <View style={styles.View_1_2172}>
                      <Text style={styles.Text_1_2172}>Marley Levin</Text>
                    </View>
                    <View style={styles.View_1_2173}>
                      <Text style={styles.Text_1_2173}>@Madelyn</Text>
                    </View>
                  </View>
                  <View style={styles.View_1_2174}>
                    <Text style={styles.Text_1_2174}>10 minutes ago</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_1_2175}>
                <Text style={styles.Text_1_2175}>
                  When you’re smoking weed in the office bathroom and someone
                  opens the door.
                </Text>
              </View>
            </View>
            <View style={styles.View_1_2176}>
              <View style={styles.View_1_2177}>
                <View style={styles.View_1_2178}>
                  <View style={styles.View_1_2179}>
                    <Text style={styles.Text_1_2179}>
                      When you’re smoking weed  in the office bathroom
                    </Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19e4/da48/a85609e0bca7e74c97a7ca44e1b7cbcf"
                  }}
                  style={styles.ImageBackground_1_2180}
                />
                <View style={styles.View_1_2181}>
                  <View style={styles.View_1_2182}>
                    <Text style={styles.Text_1_2182}>
                      and someone opens the door
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_1_2183}>
                <View style={styles.View_1_2184}>
                  <View style={styles.View_1_2185}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90b9/000e/c7eaee0e411836792fd7fc04c167d686"
                      }}
                      style={styles.ImageBackground_I1_2185_3110_57363}
                    />
                    <View style={styles.View_I1_2185_3110_57364}>
                      <Text style={styles.Text_I1_2185_3110_57364}>54</Text>
                    </View>
                  </View>
                  <View style={styles.View_1_2186}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84f4/0ebb/4cd9ef62b3aff227be87a6c116b7cfde"
                      }}
                      style={styles.ImageBackground_1_2187}
                    />
                    <View style={styles.View_1_2188}>
                      <Text style={styles.Text_1_2188}>54</Text>
                    </View>
                  </View>
                  <View style={styles.View_1_2189}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d943/c894/3a302e855f42dfba9bee6db21640c284"
                      }}
                      style={styles.ImageBackground_1_2190}
                    />
                    <View style={styles.View_1_2191}>
                      <Text style={styles.Text_1_2191}>54</Text>
                    </View>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/998c/389f/c0b1676ade50bc8a362ad37d329bdba3"
                  }}
                  style={styles.ImageBackground_1_2192}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_2193}>
        <View style={styles.View_I1_2193_2668_51111}>
          <Text style={styles.Text_I1_2193_2668_51111}>Feed</Text>
        </View>
        <View source={{ uri: "null" }} style={styles.View_I1_2193_2668_51112} />
        <View style={styles.View_I1_2193_2668_51114}>
          <View style={styles.View_I1_2193_2668_51115}>
            <View style={styles.View_I1_2193_2668_51116} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ea4/5a42/af9f7ca337aaebbfdaaecdb6919640ab"
              }}
              style={styles.ImageBackground_I1_2193_2668_51117}
            />
            <View style={styles.View_I1_2193_2668_51118} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac13/0b2b/83b3e58e74d696e444979a21cef6584b"
            }}
            style={styles.ImageBackground_I1_2193_2668_51119}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fe4/5cb9/8cac0d6edd13dca2b8aa934732862efb"
            }}
            style={styles.ImageBackground_I1_2193_2668_51123}
          />
          <View style={styles.View_I1_2193_2668_51128}>
            <View style={styles.View_I1_2193_2668_51129}>
              <Text style={styles.Text_I1_2193_2668_51129}>9:41</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc7e/bb34/20423812ed21b58bac76d6227dbc874f"
          }}
          style={styles.ImageBackground_I1_2193_2869_52565}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/40c6/7789/503d269f7edb50cc68c2c017bc266464"
          }}
          style={styles.ImageBackground_I1_2193_4767_121696}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0390/9bc7/b5bb9ceae9394c04c86d863afda68f06"
          }}
          style={styles.ImageBackground_I1_2193_5530_169999}
        />
      </View>
      <View style={styles.View_1_2194}>
        <View style={styles.View_I1_2194_5530_127698} />
        <View style={styles.View_I1_2194_5530_127699}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/471f/9e2e/7f2d47b90deceabcc779bf3744bba5a1"
            }}
            style={styles.ImageBackground_I1_2194_5530_127700}
          />
          <View style={styles.View_I1_2194_5530_128848}>
            <Text style={styles.Text_I1_2194_5530_128848}>Feed</Text>
          </View>
        </View>
        <View style={styles.View_I1_2194_5530_127701}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/417c/0bdf/5b52eaa1333dd38f3215b677b7626385"
            }}
            style={styles.ImageBackground_I1_2194_5530_127702}
          />
        </View>
        <View style={styles.View_I1_2194_5530_127703}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cae1/8447/750b3a93fb91f0a5f7f4b279eaaeb707"
            }}
            style={styles.ImageBackground_I1_2194_5530_127704}
          />
        </View>
        <View style={styles.View_I1_2194_5530_127705}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a37/4386/b8ab77441b23306b91849cf32071576c"
            }}
            style={styles.ImageBackground_I1_2194_5530_127708}
          />
        </View>
        <View style={styles.View_I1_2194_5530_127712} />
        <View style={styles.View_I1_2194_5530_127713}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e12b/d35b/359ba74d23e63e76d63654cd3773dcfd"
            }}
            style={styles.ImageBackground_I1_2194_5530_127714}
          />
          <View style={styles.View_I1_2194_5530_127716}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6893/2501/620f72b08987d809b7d6740e8543f587"
              }}
              style={styles.ImageBackground_I1_2194_5530_127717}
            />
            <View style={styles.View_I1_2194_5530_127718}>
              <View
                source={{ uri: "null" }}
                style={styles.View_I1_2194_5530_127718_5429_126310}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2dc8/52d3/a01dc2e5c3421b9492a540bf877f4ba9"
                }}
                style={styles.ImageBackground_I1_2194_5530_127718_5429_126311}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c074/bc17/04ec3e59cf2b9ef2f63cd7901ff21e83"
                }}
                style={styles.ImageBackground_I1_2194_5530_127718_5429_126312}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("694%") },
  View_1_1967: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("669%"),
    minHeight: hp("669%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1968: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("98%"),
    minHeight: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1969: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("98%"),
    minHeight: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1970: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1971: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1972: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1974: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1975: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1976: {
    width: wp("28%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_1_1976: {
    color: "rgba(32, 39, 51, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1977: {
    width: wp("29%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_1_1977: {
    color: "rgba(32, 39, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1978: {
    width: wp("29%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_1_1978: {
    color: "rgba(143, 147, 153, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1979: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1979_1_1921: {
    flexGrow: 1,
    width: wp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_1979_1_1921: {
    color: "rgba(2, 9, 31, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1980: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("80%"),
    minHeight: hp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1981: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("76%"),
    minHeight: hp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1_1982: {
    flexGrow: 1,
    width: wp("89%"),
    height: hp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_1983: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("71%"),
    justifyContent: "center"
  },
  Text_1_1983: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1984: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("77%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1985: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1986: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_1986_3110_57363: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1_1986_3110_57364: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1_1986_3110_57364: {
    color: "rgba(128, 132, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1987: {
    width: wp("11%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1988: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1989: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "center"
  },
  Text_1_1989: {
    color: "rgba(128, 132, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1990: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1991: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1992: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "center"
  },
  Text_1_1992: {
    color: "rgba(143, 147, 153, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1993: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%")
  },
  View_1_1994: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("102%"),
    minHeight: hp("102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("102%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1995: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("102%"),
    minHeight: hp("102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1996: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1997: {
    width: wp("55%"),
    minWidth: wp("55%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1998: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_2000: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2001: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2002: {
    width: wp("38%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_1_2002: {
    color: "rgba(32, 39, 51, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2003: {
    width: wp("29%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_1_2003: {
    color: "rgba(32, 39, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2004: {
    width: wp("29%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_1_2004: {
    color: "rgba(143, 147, 153, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2005: {
    width: wp("89%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_2005: {
    color: "rgba(2, 9, 31, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2006: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2007: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("77%"),
    minHeight: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_1_2008: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_1_2009: {
    width: wp("87%"),
    minWidth: wp("87%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_1_2009: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13.042253494262695,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.9436619281768799,
    textTransform: "uppercase"
  },
  ImageBackground_1_2010: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("64%"),
    minHeight: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    resizeMode: "cover"
  },
  View_1_2011: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("71%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2012: {
    width: wp("87%"),
    minWidth: wp("87%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_1_2012: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13.042253494262695,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.9436619281768799,
    textTransform: "uppercase"
  },
  View_1_2013: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("78%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2014: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2015: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_2015_3110_57363: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1_2015_3110_57364: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1_2015_3110_57364: {
    color: "rgba(128, 132, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2016: {
    width: wp("11%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_2017: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_2018: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "center"
  },
  Text_1_2018: {
    color: "rgba(128, 132, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2019: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_2020: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_2021: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "center"
  },
  Text_1_2021: {
    color: "rgba(143, 147, 153, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_2022: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%")
  },
  View_1_2023: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("101%"),
    minHeight: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("209%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2024: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("101%"),
    minHeight: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2025: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2026: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_2027: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_2029: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2030: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2031: {
    width: wp("31%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_1_2031: {
    color: "rgba(32, 39, 51, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2032: {
    width: wp("29%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_1_2032: {
    color: "rgba(32, 39, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2033: {
    width: wp("29%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_1_2033: {
    color: "rgba(143, 147, 153, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2034: {
    width: wp("89%"),
    minWidth: wp("89%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_1_2034: {
    color: "rgba(2, 9, 31, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2035: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("83%"),
    minHeight: hp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2036: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("79%"),
    minHeight: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(242, 242, 242, 1)"
  },
  View_1_2037: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2038: {
    width: wp("83%"),
    minWidth: wp("83%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_1_2038: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14.870346069335938,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_2039: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("69%"),
    minHeight: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    resizeMode: "cover"
  },
  View_1_2040: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("80%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2041: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2042: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_2042_3110_57363: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1_2042_3110_57364: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1_2042_3110_57364: {
    color: "rgba(128, 132, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2043: {
    width: wp("11%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_2044: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_2045: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "center"
  },
  Text_1_2045: {
    color: "rgba(128, 132, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2046: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_2047: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_2048: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "center"
  },
  Text_1_2048: {
    color: "rgba(143, 147, 153, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_2049: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%")
  },
  View_1_2050: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("77%"),
    minHeight: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("314%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2051: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("77%"),
    minHeight: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2052: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2053: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_2054: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_2056: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2057: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2058: {
    width: wp("28%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_1_2058: {
    color: "rgba(32, 39, 51, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2059: {
    width: wp("29%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_1_2059: {
    color: "rgba(32, 39, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2060: {
    width: wp("29%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_1_2060: {
    color: "rgba(143, 147, 153, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2061: {
    width: wp("89%"),
    minWidth: wp("89%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_1_2061: {
    color: "rgba(2, 9, 31, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2062: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2063: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("55%"),
    minHeight: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_1_2064: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2065: {
    width: wp("70%"),
    minWidth: wp("70%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_1_2065: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14.309858322143555,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9154929518699646,
    textTransform: "uppercase"
  },
  ImageBackground_1_2066: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%")
  },
  View_1_2067: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("49%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2068: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_1_2068: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14.309858322143555,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9154929518699646,
    textTransform: "uppercase"
  },
  View_1_2069: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("56%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2070: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2071: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_2071_3110_57363: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1_2071_3110_57364: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1_2071_3110_57364: {
    color: "rgba(128, 132, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2072: {
    width: wp("11%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_2073: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_2074: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "center"
  },
  Text_1_2074: {
    color: "rgba(128, 132, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2075: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_2076: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_2077: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "center"
  },
  Text_1_2077: {
    color: "rgba(143, 147, 153, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_2078: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%")
  },
  View_1_2079: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("69%"),
    minHeight: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("395%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2080: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("69%"),
    minHeight: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2081: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2082: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_2083: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_2085: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2086: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2087: {
    width: wp("26%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_1_2087: {
    color: "rgba(32, 39, 51, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2088: {
    width: wp("29%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_1_2088: {
    color: "rgba(32, 39, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2089: {
    width: wp("29%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_1_2089: {
    color: "rgba(143, 147, 153, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2090: {
    width: wp("89%"),
    minWidth: wp("89%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_1_2090: {
    color: "rgba(2, 9, 31, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2091: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2092: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_1_2093: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2094: {
    width: wp("87%"),
    minWidth: wp("87%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_1_2094: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13.042253494262695,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.9436619877815247,
    textTransform: "uppercase"
  },
  ImageBackground_1_2095: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    resizeMode: "cover"
  },
  View_1_2096: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("37%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2097: {
    width: wp("87%"),
    minWidth: wp("87%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_1_2097: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13.042253494262695,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.9436619877815247,
    textTransform: "uppercase"
  },
  View_1_2098: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("45%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2099: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2100: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_2100_3110_57363: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1_2100_3110_57364: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1_2100_3110_57364: {
    color: "rgba(128, 132, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2101: {
    width: wp("11%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_2102: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_2103: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "center"
  },
  Text_1_2103: {
    color: "rgba(128, 132, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2104: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_2105: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_2106: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "center"
  },
  Text_1_2106: {
    color: "rgba(143, 147, 153, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_2107: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%")
  },
  View_1_2108: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("60%"),
    minHeight: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("468%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2109: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("60%"),
    minHeight: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2110: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2111: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_2112: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_2114: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2115: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2116: {
    width: wp("26%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_1_2116: {
    color: "rgba(32, 39, 51, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2117: {
    width: wp("29%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_1_2117: {
    color: "rgba(32, 39, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2118: {
    width: wp("29%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_1_2118: {
    color: "rgba(143, 147, 153, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2119: {
    width: wp("89%"),
    minWidth: wp("89%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_1_2119: {
    color: "rgba(2, 9, 31, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2120: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2121: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("38%"),
    minHeight: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_2122: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2123: {
    width: wp("83%"),
    minWidth: wp("83%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_1_2123: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14.873241424560547,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_2124: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    resizeMode: "cover"
  },
  View_1_2125: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("39%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2126: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2127: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_2127_3110_57363: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1_2127_3110_57364: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1_2127_3110_57364: {
    color: "rgba(128, 132, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2128: {
    width: wp("11%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_2129: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_2130: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "center"
  },
  Text_1_2130: {
    color: "rgba(128, 132, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2131: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_2132: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_2133: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "center"
  },
  Text_1_2133: {
    color: "rgba(143, 147, 153, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_2134: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%")
  },
  View_1_2135: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("532%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2136: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2137: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2138: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_2139: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_2141: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2142: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2143: {
    width: wp("26%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_1_2143: {
    color: "rgba(32, 39, 51, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2144: {
    width: wp("29%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_1_2144: {
    color: "rgba(32, 39, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2145: {
    width: wp("29%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_1_2145: {
    color: "rgba(143, 147, 153, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2146: {
    width: wp("89%"),
    minWidth: wp("89%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_1_2146: {
    color: "rgba(2, 9, 31, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2147: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2148: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_1_2149: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2150: {
    width: wp("83%"),
    minWidth: wp("83%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_1_2150: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9436619877815247,
    textTransform: "uppercase"
  },
  ImageBackground_1_2151: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    resizeMode: "cover"
  },
  View_1_2152: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2153: {
    width: wp("82%"),
    minWidth: wp("82%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_1_2153: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.098591804504395,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9436619877815247,
    textTransform: "uppercase"
  },
  View_1_2154: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("40%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2155: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2156: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_2156_3110_57363: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1_2156_3110_57364: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1_2156_3110_57364: {
    color: "rgba(128, 132, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2157: {
    width: wp("11%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_2158: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_2159: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "center"
  },
  Text_1_2159: {
    color: "rgba(128, 132, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2160: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_2161: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_2162: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "center"
  },
  Text_1_2162: {
    color: "rgba(143, 147, 153, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_2163: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%")
  },
  View_1_2164: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("72%"),
    minHeight: hp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("597%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2165: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("72%"),
    minHeight: hp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2166: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2167: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_2168: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_2170: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2171: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2172: {
    width: wp("26%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_1_2172: {
    color: "rgba(32, 39, 51, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2173: {
    width: wp("29%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_1_2173: {
    color: "rgba(32, 39, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2174: {
    width: wp("29%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_1_2174: {
    color: "rgba(143, 147, 153, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2175: {
    width: wp("89%"),
    minWidth: wp("89%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_1_2175: {
    color: "rgba(2, 9, 31, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2176: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("54%"),
    minHeight: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2177: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_1_2178: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2179: {
    width: wp("87%"),
    minWidth: wp("87%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_1_2179: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13.985916137695312,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.9436619877815247,
    textTransform: "uppercase"
  },
  ImageBackground_1_2180: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    resizeMode: "cover"
  },
  View_1_2181: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2182: {
    width: wp("87%"),
    minWidth: wp("87%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_1_2182: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.704225540161133,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.9436619877815247,
    textTransform: "uppercase"
  },
  View_1_2183: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("51%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2184: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2185: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_2185_3110_57363: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1_2185_3110_57364: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1_2185_3110_57364: {
    color: "rgba(128, 132, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2186: {
    width: wp("11%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_2187: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_2188: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "center"
  },
  Text_1_2188: {
    color: "rgba(128, 132, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2189: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_2190: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_2191: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "center"
  },
  Text_1_2191: {
    color: "rgba(143, 147, 153, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_2192: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%")
  },
  View_1_2193: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I1_2193_2668_51111: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_I1_2193_2668_51111: {
    color: "rgba(2, 9, 31, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_2193_2668_51112: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%")
  },
  View_I1_2193_2668_51114: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1_2193_2668_51115: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("2%")
  },
  View_I1_2193_2668_51116: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(2, 9, 31, 1)",
    borderWidth: 1
  },
  ImageBackground_I1_2193_2668_51117: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I1_2193_2668_51118: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(2, 9, 31, 1)"
  },
  ImageBackground_I1_2193_2668_51119: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_I1_2193_2668_51123: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_I1_2193_2668_51128: {
    width: wp("14%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_2193_2668_51129: {
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1_2193_2668_51129: {
    color: "rgba(2, 9, 31, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_I1_2193_2869_52565: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("7%")
  },
  ImageBackground_I1_2193_4767_121696: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("7%")
  },
  ImageBackground_I1_2193_5530_169999: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("7%")
  },
  View_1_2194: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("684%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_2194_5530_127698: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1_2194_5530_127699: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_2194_5530_127700: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_I1_2194_5530_128848: {
    width: wp("6%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "center"
  },
  Text_I1_2194_5530_128848: {
    color: "rgba(42, 176, 111, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_2194_5530_127701: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_2194_5530_127702: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_I1_2194_5530_127703: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_2194_5530_127704: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_I1_2194_5530_127705: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_2194_5530_127708: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_I1_2194_5530_127712: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_2194_5530_127713: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("0%")
  },
  ImageBackground_I1_2194_5530_127714: {
    width: wp("17%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_2194_5530_127716: {
    width: wp("15%"),
    height: hp("8%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I1_2194_5530_127717: {
    width: wp("15%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_2194_5530_127718: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1_2194_5530_127718_5429_126310: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_2194_5530_127718_5429_126311: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I1_2194_5530_127718_5429_126312: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
