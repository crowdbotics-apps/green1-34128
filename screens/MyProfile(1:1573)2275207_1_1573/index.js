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
      <View style={styles.View_1_1574}>
        <View style={styles.View_I1_1574_7289_177919}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1cf/2ad2/e53128a079766b3c2c2727681d6ec90d"
            }}
            style={styles.ImageBackground_I1_1574_2830_50515}
          />
          <View style={styles.View_I1_1574_7289_169430}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90e0/cd26/7aa610440fdf28cf15f5247077399bd0"
              }}
              style={styles.ImageBackground_I1_1574_7289_167132}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a72c/207e/6d2abf75a59b6eb145a9760315650f5d"
              }}
              style={styles.ImageBackground_I1_1574_7289_165061}
            />
          </View>
        </View>
        <View style={styles.View_I1_1574_2726_50327}>
          <View style={styles.View_I1_1574_2726_50326}>
            <View style={styles.View_I1_1574_2726_50275}>
              <Text style={styles.Text_I1_1574_2726_50275}>
                Madelyn Culhane
              </Text>
            </View>
            <View style={styles.View_I1_1574_2726_50276}>
              <Text style={styles.Text_I1_1574_2726_50276}>@Madelyn</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_1575}>
        <View style={styles.View_1_1576}>
          <View style={styles.View_I1_1576_1_1223}>
            <Text style={styles.Text_I1_1576_1_1223}>Friends:</Text>
          </View>
          <View style={styles.View_I1_1576_1_1224}>
            <Text style={styles.Text_I1_1576_1_1224}>234</Text>
          </View>
        </View>
        <View style={styles.View_1_1577}>
          <View style={styles.View_I1_1577_1_1223}>
            <Text style={styles.Text_I1_1577_1_1223}>Followers:</Text>
          </View>
          <View style={styles.View_I1_1577_1_1224}>
            <Text style={styles.Text_I1_1577_1_1224}>67</Text>
          </View>
        </View>
        <View style={styles.View_1_1578}>
          <View style={styles.View_I1_1578_1_1223}>
            <Text style={styles.Text_I1_1578_1_1223}>Following:</Text>
          </View>
          <View style={styles.View_I1_1578_1_1224}>
            <Text style={styles.Text_I1_1578_1_1224}>143</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1_1579}>
        <View style={styles.View_1_1580}>
          <Text style={styles.Text_1_1580}>Date of birth</Text>
        </View>
        <View style={styles.View_1_1581}>
          <Text style={styles.Text_1_1581}>Gender</Text>
        </View>
        <View style={styles.View_1_1582}>
          <Text style={styles.Text_1_1582}>Female</Text>
        </View>
        <View style={styles.View_1_1583}>
          <Text style={styles.Text_1_1583}>City</Text>
        </View>
        <View style={styles.View_1_1584}>
          <Text style={styles.Text_1_1584}>New York</Text>
        </View>
        <View style={styles.View_1_1585}>
          <Text style={styles.Text_1_1585}>May 24 1990</Text>
        </View>
      </View>
      <View style={styles.View_1_1586}>
        <View style={styles.View_I1_1586_1_1226}>
          <Text style={styles.Text_I1_1586_1_1226}>My Posts</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c658/1998/8c6cf837ca8430ee9cebf63fca745dfb"
        }}
        style={styles.ImageBackground_1_1587}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9c1/5529/e87efadfda929894c892ff0043021451"
        }}
        style={styles.ImageBackground_1_1588}
      />
      <View style={styles.View_1_1589}>
        <View style={styles.View_1_1590}>
          <View style={styles.View_1_1591}>
            <View style={styles.View_I1_1591_1_210}>
              <View style={styles.View_I1_1591_1_211}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e8a/b1d2/eef137e0a953637a198f7a63b5fd78d7"
                  }}
                  style={styles.ImageBackground_I1_1591_1_211_2830_50337}
                />
                <View style={styles.View_I1_1591_1_211_2733_49276}>
                  <Text style={styles.Text_I1_1591_1_211_2733_49276}>
                    Madelyn Culhane
                  </Text>
                </View>
              </View>
              <View style={styles.View_I1_1591_1_212}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/68e7/0e67/f2fdccbeb55e40d5ad215c6a49c9c8d5"
                  }}
                  style={styles.ImageBackground_I1_1591_1_213}
                />
                <View style={styles.View_I1_1591_1_217}>
                  <View style={styles.View_I1_1591_1_218}>
                    <View style={styles.View_I1_1591_1_219}>
                      <View style={styles.View_I1_1591_1_223}>
                        <Text style={styles.Text_I1_1591_1_223}>
                          Lorem ipsum dolor sit amet, consect ...
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I1_1591_1_227}>
                    <View style={styles.View_I1_1591_1_228}>
                      <View style={styles.View_I1_1591_1_228_2740_49850}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c644/cbbf/27e03826e6f4dc69897f4af591c0e21c"
                          }}
                          style={
                            styles.ImageBackground_I1_1591_1_228_2740_49851
                          }
                        />
                        <View style={styles.View_I1_1591_1_228_2740_49852}>
                          <Text style={styles.Text_I1_1591_1_228_2740_49852}>
                            54
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_I1_1591_1_229}>
                      <View style={styles.View_I1_1591_1_229_2740_49832}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2cc/099d/f9c7842cabe5718ebe8e76d765bbdff7"
                          }}
                          style={
                            styles.ImageBackground_I1_1591_1_229_2740_49833
                          }
                        />
                        <View style={styles.View_I1_1591_1_229_2740_49834}>
                          <Text style={styles.Text_I1_1591_1_229_2740_49834}>
                            54
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_1_1592}>
            <View style={styles.View_1_1593}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e8a/b1d2/eef137e0a953637a198f7a63b5fd78d7"
                }}
                style={styles.ImageBackground_I1_1593_2830_50337}
              />
              <View style={styles.View_I1_1593_2733_49276}>
                <Text style={styles.Text_I1_1593_2733_49276}>
                  Madelyn Culhane
                </Text>
              </View>
            </View>
            <View style={styles.View_1_1594}>
              <View style={styles.View_1_1595}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b34/a2eb/fc5332db8d034fb490ea8fd3b717427b"
                  }}
                  style={styles.ImageBackground_I1_1595_2733_51295}
                />
              </View>
              <View style={styles.View_1_1596}>
                <View style={styles.View_I1_1596_1_1259}>
                  <Text style={styles.Text_I1_1596_1_1259}>
                    Lorem ipsum dolor sit amet, consect ...
                  </Text>
                </View>
              </View>
              <View style={styles.View_1_1597}>
                <View style={styles.View_I1_1597_1_1261}>
                  <Text style={styles.Text_I1_1597_1_1261}>10 minutes ago</Text>
                </View>
              </View>
              <View style={styles.View_1_1598}>
                <View style={styles.View_I1_1598_1_1263}>
                  <View style={styles.View_I1_1598_1_1264}>
                    <View style={styles.View_I1_1598_1_1264_2740_49850}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c644/cbbf/27e03826e6f4dc69897f4af591c0e21c"
                        }}
                        style={styles.ImageBackground_I1_1598_1_1264_2740_49851}
                      />
                      <View style={styles.View_I1_1598_1_1264_2740_49852}>
                        <Text style={styles.Text_I1_1598_1_1264_2740_49852}>
                          54
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I1_1598_1_1265}>
                    <View style={styles.View_I1_1598_1_1265_2740_49832}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2cc/099d/f9c7842cabe5718ebe8e76d765bbdff7"
                        }}
                        style={styles.ImageBackground_I1_1598_1_1265_2740_49833}
                      />
                      <View style={styles.View_I1_1598_1_1265_2740_49834}>
                        <Text style={styles.Text_I1_1598_1_1265_2740_49834}>
                          54
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_1_1599}>
          <View style={styles.View_1_1600}>
            <View style={styles.View_I1_1600_1_145}>
              <View style={styles.View_I1_1600_1_146}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e8a/b1d2/eef137e0a953637a198f7a63b5fd78d7"
                  }}
                  style={styles.ImageBackground_I1_1600_1_146_2830_50337}
                />
                <View style={styles.View_I1_1600_1_146_2733_49276}>
                  <Text style={styles.Text_I1_1600_1_146_2733_49276}>
                    Madelyn Culhane
                  </Text>
                </View>
              </View>
              <View style={styles.View_I1_1600_1_147}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ed5/48c3/3598abcd518aa1f922faef89a0301ddb"
                  }}
                  style={styles.ImageBackground_I1_1600_1_148}
                />
                <View style={styles.View_I1_1600_1_152}>
                  <View style={styles.View_I1_1600_1_153}>
                    <View style={styles.View_I1_1600_1_154}>
                      <View style={styles.View_I1_1600_1_158}>
                        <Text style={styles.Text_I1_1600_1_158}>
                          Lorem ipsum dolor sit amet, consect ...
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I1_1600_1_162}>
                    <View style={styles.View_I1_1600_1_163}>
                      <View style={styles.View_I1_1600_1_163_2740_49850}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c644/cbbf/27e03826e6f4dc69897f4af591c0e21c"
                          }}
                          style={
                            styles.ImageBackground_I1_1600_1_163_2740_49851
                          }
                        />
                        <View style={styles.View_I1_1600_1_163_2740_49852}>
                          <Text style={styles.Text_I1_1600_1_163_2740_49852}>
                            54
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_I1_1600_1_164}>
                      <View style={styles.View_I1_1600_1_164_2740_49832}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2cc/099d/f9c7842cabe5718ebe8e76d765bbdff7"
                          }}
                          style={
                            styles.ImageBackground_I1_1600_1_164_2740_49833
                          }
                        />
                        <View style={styles.View_I1_1600_1_164_2740_49834}>
                          <Text style={styles.Text_I1_1600_1_164_2740_49834}>
                            54
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_1_1601}>
            <View style={styles.View_1_1602}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e8a/b1d2/eef137e0a953637a198f7a63b5fd78d7"
                }}
                style={styles.ImageBackground_I1_1602_2830_50337}
              />
              <View style={styles.View_I1_1602_2733_49276}>
                <Text style={styles.Text_I1_1602_2733_49276}>
                  Madelyn Culhane
                </Text>
              </View>
            </View>
            <View style={styles.View_1_1603}>
              <View style={styles.View_1_1604}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b34/a2eb/fc5332db8d034fb490ea8fd3b717427b"
                  }}
                  style={styles.ImageBackground_I1_1604_2733_51295}
                />
              </View>
              <View style={styles.View_1_1605}>
                <View style={styles.View_I1_1605_1_1259}>
                  <Text style={styles.Text_I1_1605_1_1259}>
                    Lorem ipsum dolor sit amet, consect ...
                  </Text>
                </View>
              </View>
              <View style={styles.View_1_1606}>
                <View style={styles.View_I1_1606_1_1261}>
                  <Text style={styles.Text_I1_1606_1_1261}>10 minutes ago</Text>
                </View>
              </View>
              <View style={styles.View_1_1607}>
                <View style={styles.View_I1_1607_1_1263}>
                  <View style={styles.View_I1_1607_1_1264}>
                    <View style={styles.View_I1_1607_1_1264_2740_49850}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c644/cbbf/27e03826e6f4dc69897f4af591c0e21c"
                        }}
                        style={styles.ImageBackground_I1_1607_1_1264_2740_49851}
                      />
                      <View style={styles.View_I1_1607_1_1264_2740_49852}>
                        <Text style={styles.Text_I1_1607_1_1264_2740_49852}>
                          54
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I1_1607_1_1265}>
                    <View style={styles.View_I1_1607_1_1265_2740_49832}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2cc/099d/f9c7842cabe5718ebe8e76d765bbdff7"
                        }}
                        style={styles.ImageBackground_I1_1607_1_1265_2740_49833}
                      />
                      <View style={styles.View_I1_1607_1_1265_2740_49834}>
                        <Text style={styles.Text_I1_1607_1_1265_2740_49834}>
                          54
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_1608}>
        <View style={styles.View_I1_1608_2_46964}>
          <View style={styles.View_I1_1608_2_46965} />
          <View style={styles.View_I1_1608_2_46966}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb1a/3f86/82ae9d90b52f9256b3cb0f75ce4898d6"
              }}
              style={styles.ImageBackground_I1_1608_2_46967}
            />
          </View>
          <View style={styles.View_I1_1608_2_46968}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/417c/0bdf/5b52eaa1333dd38f3215b677b7626385"
              }}
              style={styles.ImageBackground_I1_1608_2_46969}
            />
          </View>
          <View style={styles.View_I1_1608_2_46970}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cae1/8447/750b3a93fb91f0a5f7f4b279eaaeb707"
              }}
              style={styles.ImageBackground_I1_1608_2_46971}
            />
          </View>
          <View style={styles.View_I1_1608_2_46972}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a37/4386/b8ab77441b23306b91849cf32071576c"
              }}
              style={styles.ImageBackground_I1_1608_2_46975}
            />
          </View>
          <View style={styles.View_I1_1608_2_46979} />
          <View style={styles.View_I1_1608_2_46980}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e12b/d35b/359ba74d23e63e76d63654cd3773dcfd"
              }}
              style={styles.ImageBackground_I1_1608_2_46981}
            />
            <View style={styles.View_I1_1608_2_46983}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6893/2501/620f72b08987d809b7d6740e8543f587"
                }}
                style={styles.ImageBackground_I1_1608_2_46984}
              />
              <View style={styles.View_I1_1608_2_46985}>
                <View
                  source={{ uri: "null" }}
                  style={styles.View_I1_1608_2_46985_5429_126310}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2dc8/52d3/a01dc2e5c3421b9492a540bf877f4ba9"
                  }}
                  style={styles.ImageBackground_I1_1608_2_46985_5429_126311}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c074/bc17/04ec3e59cf2b9ef2f63cd7901ff21e83"
                  }}
                  style={styles.ImageBackground_I1_1608_2_46985_5429_126312}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_1609}>
        <View style={styles.View_I1_1609_2_46726}>
          <Text style={styles.Text_I1_1609_2_46726}>GreenLync</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9676/094c/186014e5d2e08dd76fd752ea7f4921bf"
          }}
          style={styles.ImageBackground_I1_1609_2_46727}
        />
        <View style={styles.View_I1_1609_2_46728}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb8e/748b/27d8ecce4a6af15b72feb8f2bbb5c0aa"
            }}
            style={styles.ImageBackground_I1_1609_2_46728_1_426}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e05/9e5a/457f8b99da9604fa7ee1700fdac40f8c"
            }}
            style={styles.ImageBackground_I1_1609_2_46728_1_430}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fe4/5cb9/8cac0d6edd13dca2b8aa934732862efb"
            }}
            style={styles.ImageBackground_I1_1609_2_46728_1_434}
          />
          <View style={styles.View_I1_1609_2_46728_1_439}>
            <View style={styles.View_I1_1609_2_46728_1_440}>
              <Text style={styles.Text_I1_1609_2_46728_1_440}>9:41</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/40c6/7789/503d269f7edb50cc68c2c017bc266464"
          }}
          style={styles.ImageBackground_I1_1609_2_46729}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0390/9bc7/b5bb9ceae9394c04c86d863afda68f06"
          }}
          style={styles.ImageBackground_I1_1609_2_46730}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(250, 250, 250, 1)" },
  View_2: { height: hp("111%") },
  View_1_1574: {
    width: wp("52%"),
    minWidth: wp("52%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1574_7289_177919: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_1574_2830_50515: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_1574_7289_169430: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("4%")
  },
  ImageBackground_I1_1574_7289_167132: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1_1574_7289_165061: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I1_1574_2726_50327: {
    flexGrow: 1,
    width: wp("35%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1574_2726_50326: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1574_2726_50275: {
    width: wp("35%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I1_1574_2726_50275: {
    color: "rgba(2, 9, 31, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1574_2726_50276: {
    width: wp("29%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I1_1574_2726_50276: {
    color: "rgba(2, 9, 31, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1575: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("38%")
  },
  View_1_1576: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1_1576_1_1223: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I1_1576_1_1223: {
    color: "rgba(143, 147, 153, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1576_1_1224: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I1_1576_1_1224: {
    color: "rgba(32, 39, 51, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1577: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1_1577_1_1223: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I1_1577_1_1223: {
    color: "rgba(143, 147, 153, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1577_1_1224: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I1_1577_1_1224: {
    color: "rgba(32, 39, 51, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1578: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1_1578_1_1223: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I1_1578_1_1223: {
    color: "rgba(143, 147, 153, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1578_1_1224: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I1_1578_1_1224: {
    color: "rgba(32, 39, 51, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1579: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1580: {
    width: wp("22%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "center"
  },
  Text_1_1580: {
    color: "rgba(143, 147, 153, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1581: {
    width: wp("13%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "center"
  },
  Text_1_1581: {
    color: "rgba(143, 147, 153, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1582: {
    width: wp("13%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    justifyContent: "center"
  },
  Text_1_1582: {
    color: "rgba(32, 39, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1583: {
    width: wp("7%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "center"
  },
  Text_1_1583: {
    color: "rgba(143, 147, 153, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1584: {
    width: wp("17%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    justifyContent: "center"
  },
  Text_1_1584: {
    color: "rgba(32, 39, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1585: {
    width: wp("23%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    justifyContent: "center"
  },
  Text_1_1585: {
    color: "rgba(32, 39, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1586: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("51%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1_1586_1_1226: {
    flexGrow: 1,
    width: wp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I1_1586_1_1226: {
    color: "rgba(32, 39, 51, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1587: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("14%")
  },
  ImageBackground_1_1588: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%")
  },
  View_1_1589: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("91%"),
    minHeight: hp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("61%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1590: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("75%"),
    minHeight: hp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1591: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1591_1_210: {
    flexGrow: 1,
    width: wp("42%"),
    height: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1591_1_211: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_1591_1_211_2830_50337: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1_1591_1_211_2733_49276: {
    flexGrow: 1,
    width: wp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1_1591_1_211_2733_49276: {
    color: "rgba(2, 9, 31, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1591_1_212: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I1_1591_1_213: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1_1591_1_217: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1_1591_1_218: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1591_1_219: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1591_1_223: {
    width: wp("37%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_1591_1_223: {
    color: "rgba(32, 39, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1591_1_227: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1591_1_228: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1591_1_228_2740_49850: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_1591_1_228_2740_49851: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_1591_1_228_2740_49852: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "center"
  },
  Text_I1_1591_1_228_2740_49852: {
    color: "rgba(128, 132, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1591_1_229: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1591_1_229_2740_49832: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_1591_1_229_2740_49833: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_1591_1_229_2740_49834: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "center"
  },
  Text_I1_1591_1_229_2740_49834: {
    color: "rgba(128, 132, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1592: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1593: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_1593_2830_50337: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1_1593_2733_49276: {
    flexGrow: 1,
    width: wp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1_1593_2733_49276: {
    color: "rgba(2, 9, 31, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1594: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1595: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_1595_2733_51295: {
    flexGrow: 1,
    width: wp("42%"),
    height: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1596: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1_1596_1_1259: {
    flexGrow: 1,
    width: wp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I1_1596_1_1259: {
    color: "rgba(32, 39, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1597: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1_1597_1_1261: {
    flexGrow: 1,
    width: wp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1_1597_1_1261: {
    color: "rgba(156, 170, 193, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1598: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1_1598_1_1263: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1598_1_1264: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1598_1_1264_2740_49850: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_1598_1_1264_2740_49851: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_1598_1_1264_2740_49852: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "center"
  },
  Text_I1_1598_1_1264_2740_49852: {
    color: "rgba(128, 132, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1598_1_1265: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1598_1_1265_2740_49832: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_1598_1_1265_2740_49833: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_1598_1_1265_2740_49834: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "center"
  },
  Text_I1_1598_1_1265_2740_49834: {
    color: "rgba(128, 132, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1599: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("91%"),
    minHeight: hp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1600: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("55%"),
    minHeight: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1600_1_145: {
    flexGrow: 1,
    width: wp("42%"),
    height: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1600_1_146: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_1600_1_146_2830_50337: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1_1600_1_146_2733_49276: {
    flexGrow: 1,
    width: wp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1_1600_1_146_2733_49276: {
    color: "rgba(2, 9, 31, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1600_1_147: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("51%"),
    minHeight: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I1_1600_1_148: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("38%"),
    minHeight: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1_1600_1_152: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1_1600_1_153: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1600_1_154: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1600_1_158: {
    width: wp("37%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_1600_1_158: {
    color: "rgba(32, 39, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1600_1_162: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1600_1_163: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1600_1_163_2740_49850: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_1600_1_163_2740_49851: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_1600_1_163_2740_49852: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "center"
  },
  Text_I1_1600_1_163_2740_49852: {
    color: "rgba(128, 132, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1600_1_164: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1600_1_164_2740_49832: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_1600_1_164_2740_49833: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_1600_1_164_2740_49834: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "center"
  },
  Text_I1_1600_1_164_2740_49834: {
    color: "rgba(128, 132, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1601: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("57%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1602: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_1602_2830_50337: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1_1602_2733_49276: {
    flexGrow: 1,
    width: wp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1_1602_2733_49276: {
    color: "rgba(2, 9, 31, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1603: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1604: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_1604_2733_51295: {
    flexGrow: 1,
    width: wp("42%"),
    height: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1605: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1_1605_1_1259: {
    flexGrow: 1,
    width: wp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I1_1605_1_1259: {
    color: "rgba(32, 39, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1606: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1_1606_1_1261: {
    flexGrow: 1,
    width: wp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1_1606_1_1261: {
    color: "rgba(156, 170, 193, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1607: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1_1607_1_1263: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1607_1_1264: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1607_1_1264_2740_49850: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_1607_1_1264_2740_49851: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_1607_1_1264_2740_49852: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "center"
  },
  Text_I1_1607_1_1264_2740_49852: {
    color: "rgba(128, 132, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1607_1_1265: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1607_1_1265_2740_49832: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_1607_1_1265_2740_49833: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_1607_1_1265_2740_49834: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "center"
  },
  Text_I1_1607_1_1265_2740_49834: {
    color: "rgba(128, 132, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1608: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("101%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1608_2_46964: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1_1608_2_46965: {
    width: wp("100%"),
    height: hp("8%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1_1608_2_46966: {
    width: wp("16%"),
    height: hp("8%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_1608_2_46967: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_I1_1608_2_46968: {
    width: wp("16%"),
    height: hp("8%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_1608_2_46969: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_I1_1608_2_46970: {
    width: wp("16%"),
    height: hp("8%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_1608_2_46971: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_I1_1608_2_46972: {
    width: wp("16%"),
    height: hp("8%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_1608_2_46975: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_I1_1608_2_46979: {
    width: wp("16%"),
    height: hp("8%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1608_2_46980: {
    width: wp("17%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_I1_1608_2_46981: {
    width: wp("17%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_1608_2_46983: {
    width: wp("15%"),
    height: hp("8%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I1_1608_2_46984: {
    width: wp("15%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_1608_2_46985: {
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
  View_I1_1608_2_46985_5429_126310: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_1608_2_46985_5429_126311: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I1_1608_2_46985_5429_126312: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%")
  },
  View_1_1609: {
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
  View_I1_1609_2_46726: {
    flexGrow: 1,
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I1_1609_2_46726: {
    color: "rgba(2, 9, 31, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1_1609_2_46727: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("6%")
  },
  View_I1_1609_2_46728: {
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
  ImageBackground_I1_1609_2_46728_1_426: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("2%")
  },
  ImageBackground_I1_1609_2_46728_1_430: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("2%")
  },
  ImageBackground_I1_1609_2_46728_1_434: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  View_I1_1609_2_46728_1_439: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1609_2_46728_1_440: {
    width: wp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-end"
  },
  Text_I1_1609_2_46728_1_440: {
    color: "rgba(2, 9, 31, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000003576278683,
    textTransform: "none"
  },
  ImageBackground_I1_1609_2_46729: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("7%")
  },
  ImageBackground_I1_1609_2_46730: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("7%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
