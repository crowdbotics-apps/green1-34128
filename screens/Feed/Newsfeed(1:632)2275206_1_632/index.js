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
      <View style={styles.View_1_633}>
        <View style={styles.View_I1_633_1_3}>
          <View style={styles.View_I1_633_1_3_3028_56957}>
            <Text style={styles.Text_I1_633_1_3_3028_56957}>theJoint</Text>
          </View>
        </View>
        <View style={styles.View_I1_633_1_4}>
          <View style={styles.View_I1_633_1_4_3028_56968}>
            <Text style={styles.Text_I1_633_1_4_3028_56968}>Memes</Text>
          </View>
        </View>
        <View style={styles.View_I1_633_1_5}>
          <View style={styles.View_I1_633_1_5_3028_56968}>
            <Text style={styles.Text_I1_633_1_5_3028_56968}>Moments</Text>
          </View>
        </View>
        <View style={styles.View_I1_633_1_6}>
          <View style={styles.View_I1_633_1_6_3028_56968}>
            <Text style={styles.Text_I1_633_1_6_3028_56968}>greenTalk</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1_634}>
        <View style={styles.View_1_635}>
          <View style={styles.View_1_636}>
            <View style={styles.View_I1_636_1_22}>
              <View style={styles.View_I1_636_1_23}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e8a/b1d2/eef137e0a953637a198f7a63b5fd78d7"
                  }}
                  style={styles.ImageBackground_I1_636_1_23_2830_50337}
                />
                <View style={styles.View_I1_636_1_23_2733_49276}>
                  <Text style={styles.Text_I1_636_1_23_2733_49276}>
                    Madelyn Culhane
                  </Text>
                </View>
              </View>
              <View style={styles.View_I1_636_1_24}>
                <Text style={styles.Text_I1_636_1_24}>
                  Lorem ipsum dolor sit amet, consect ...
                </Text>
              </View>
            </View>
            <View style={styles.View_I1_636_1_25}>
              <View style={styles.View_I1_636_1_26}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f65/8b5c/48e13666332fedccaa84ccdd0642677f"
                  }}
                  style={styles.ImageBackground_I1_636_1_27}
                />
                <View style={styles.View_I1_636_1_28}>
                  <View style={styles.View_I1_636_1_29}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27f0/6268/336f835aae507ea8ee5159170cde2177"
                      }}
                      style={styles.ImageBackground_I1_636_1_30}
                    />
                    <View style={styles.View_I1_636_1_31}>
                      <Text style={styles.Text_I1_636_1_31}>
                        Airfield Supply Co.
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I1_636_1_32}>
                    <View style={styles.View_I1_636_1_33}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/14dc/9adc/3cf5375bcbbd07afba8d2c143293b7eb"
                        }}
                        style={styles.ImageBackground_I1_636_1_34}
                      />
                    </View>
                    <View style={styles.View_I1_636_1_35}>
                      <View style={styles.View_I1_636_1_36}>
                        <Text style={styles.Text_I1_636_1_36}>
                          Lorem ipsum dolor sit amet, consect ...
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_I1_636_1_39}>
                <View style={styles.View_I1_636_1_40}>
                  <View style={styles.View_I1_636_1_40_2740_49850}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c644/cbbf/27e03826e6f4dc69897f4af591c0e21c"
                      }}
                      style={styles.ImageBackground_I1_636_1_40_2740_49851}
                    />
                    <View style={styles.View_I1_636_1_40_2740_49852}>
                      <Text style={styles.Text_I1_636_1_40_2740_49852}>54</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I1_636_1_41}>
                  <View style={styles.View_I1_636_1_41_2740_49832}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2cc/099d/f9c7842cabe5718ebe8e76d765bbdff7"
                      }}
                      style={styles.ImageBackground_I1_636_1_41_2740_49833}
                    />
                    <View style={styles.View_I1_636_1_41_2740_49834}>
                      <Text style={styles.Text_I1_636_1_41_2740_49834}>54</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_1_637}>
            <View style={styles.View_I1_637_1_145}>
              <View style={styles.View_I1_637_1_146}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e9a/3cf9/fe9c5f3493b40fc73e200352aaad0b07"
                  }}
                  style={styles.ImageBackground_I1_637_1_146_2830_50337}
                />
                <View style={styles.View_I1_637_1_146_2733_49276}>
                  <Text style={styles.Text_I1_637_1_146_2733_49276}>
                    Tiana Siphron
                  </Text>
                </View>
              </View>
              <View style={styles.View_I1_637_1_147}>
                <ImageBackground style={styles.ImageBackground_I1_637_1_148} />
                <View style={styles.View_I1_637_1_152}>
                  <View style={styles.View_I1_637_1_153}>
                    <View style={styles.View_I1_637_1_154}>
                      <View style={styles.View_I1_637_1_158}>
                        <Text style={styles.Text_I1_637_1_158}>
                          Lorem ipsum dolor sit amet, dolor sit amet
                          consectetur...
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I1_637_1_162}>
                    <View style={styles.View_I1_637_1_163}>
                      <View style={styles.View_I1_637_1_163_2740_49850}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c644/cbbf/27e03826e6f4dc69897f4af591c0e21c"
                          }}
                          style={styles.ImageBackground_I1_637_1_163_2740_49851}
                        />
                        <View style={styles.View_I1_637_1_163_2740_49852}>
                          <Text style={styles.Text_I1_637_1_163_2740_49852}>
                            54
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_I1_637_1_164}>
                      <View style={styles.View_I1_637_1_164_2740_49832}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2cc/099d/f9c7842cabe5718ebe8e76d765bbdff7"
                          }}
                          style={styles.ImageBackground_I1_637_1_164_2740_49833}
                        />
                        <View style={styles.View_I1_637_1_164_2740_49834}>
                          <Text style={styles.Text_I1_637_1_164_2740_49834}>
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
          <View style={styles.View_1_638}>
            <View style={styles.View_I1_638_1_210}>
              <View style={styles.View_I1_638_1_211}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd3f/ff69/ff4c13cae10d0b69d8e2ad03218370d4"
                  }}
                  style={styles.ImageBackground_I1_638_1_211_2830_50337}
                />
                <View style={styles.View_I1_638_1_211_2733_49276}>
                  <Text style={styles.Text_I1_638_1_211_2733_49276}>
                    Maren Lipshutz
                  </Text>
                </View>
              </View>
              <View style={styles.View_I1_638_1_212}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/543a/02fe/ab8962c59ae7484596f70d04c81fb5d4"
                  }}
                  style={styles.ImageBackground_I1_638_1_213}
                />
                <View style={styles.View_I1_638_1_217}>
                  <View style={styles.View_I1_638_1_218}>
                    <View style={styles.View_I1_638_1_219}>
                      <View style={styles.View_I1_638_1_223}>
                        <Text style={styles.Text_I1_638_1_223}>
                          Lorem ipsum dolor sit amet, dolor sit amet
                          consectetur...
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I1_638_1_227}>
                    <View style={styles.View_I1_638_1_228}>
                      <View style={styles.View_I1_638_1_228_2740_49850}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c644/cbbf/27e03826e6f4dc69897f4af591c0e21c"
                          }}
                          style={styles.ImageBackground_I1_638_1_228_2740_49851}
                        />
                        <View style={styles.View_I1_638_1_228_2740_49852}>
                          <Text style={styles.Text_I1_638_1_228_2740_49852}>
                            54
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_I1_638_1_229}>
                      <View style={styles.View_I1_638_1_229_2740_49832}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2cc/099d/f9c7842cabe5718ebe8e76d765bbdff7"
                          }}
                          style={styles.ImageBackground_I1_638_1_229_2740_49833}
                        />
                        <View style={styles.View_I1_638_1_229_2740_49834}>
                          <Text style={styles.Text_I1_638_1_229_2740_49834}>
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
          <View style={styles.View_1_639}>
            <View style={styles.View_I1_639_1_145}>
              <View style={styles.View_I1_639_1_146}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd3f/ff69/ff4c13cae10d0b69d8e2ad03218370d4"
                  }}
                  style={styles.ImageBackground_I1_639_1_146_2830_50337}
                />
                <View style={styles.View_I1_639_1_146_2733_49276}>
                  <Text style={styles.Text_I1_639_1_146_2733_49276}>
                    Chance Dokidis
                  </Text>
                </View>
              </View>
              <View style={styles.View_I1_639_1_147}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48b4/1a28/adecbc55f26bdaa54f2eebc40d0335c9"
                  }}
                  style={styles.ImageBackground_I1_639_1_148}
                />
                <View style={styles.View_I1_639_1_152}>
                  <View style={styles.View_I1_639_1_153}>
                    <View style={styles.View_I1_639_1_154}>
                      <View style={styles.View_I1_639_1_158}>
                        <Text style={styles.Text_I1_639_1_158}>
                          Lorem ipsum dolor sit amet, dolor sit amet
                          consectetur...
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I1_639_1_162}>
                    <View style={styles.View_I1_639_1_163}>
                      <View style={styles.View_I1_639_1_163_2740_49850}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c644/cbbf/27e03826e6f4dc69897f4af591c0e21c"
                          }}
                          style={styles.ImageBackground_I1_639_1_163_2740_49851}
                        />
                        <View style={styles.View_I1_639_1_163_2740_49852}>
                          <Text style={styles.Text_I1_639_1_163_2740_49852}>
                            54
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_I1_639_1_164}>
                      <View style={styles.View_I1_639_1_164_2740_49832}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2cc/099d/f9c7842cabe5718ebe8e76d765bbdff7"
                          }}
                          style={styles.ImageBackground_I1_639_1_164_2740_49833}
                        />
                        <View style={styles.View_I1_639_1_164_2740_49834}>
                          <Text style={styles.Text_I1_639_1_164_2740_49834}>
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
        <View style={styles.View_1_640}>
          <View style={styles.View_1_641}>
            <View style={styles.View_I1_641_1_145}>
              <View style={styles.View_I1_641_1_146}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ad4/770b/e576b035e08d3004adb113397d62a55f"
                  }}
                  style={styles.ImageBackground_I1_641_1_146_2830_50337}
                />
                <View style={styles.View_I1_641_1_146_2733_49276}>
                  <Text style={styles.Text_I1_641_1_146_2733_49276}>
                    Cooper Westervelt
                  </Text>
                </View>
              </View>
              <View style={styles.View_I1_641_1_147}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4fb/a36d/a0d6ce51e66d0d59da2b203f253594ff"
                  }}
                  style={styles.ImageBackground_I1_641_1_148}
                />
                <View style={styles.View_I1_641_1_152}>
                  <View style={styles.View_I1_641_1_153}>
                    <View style={styles.View_I1_641_1_154}>
                      <View style={styles.View_I1_641_1_158}>
                        <Text style={styles.Text_I1_641_1_158}>
                          Lorem ipsum dolor sit amet, dolor sit amet
                          consectetur...
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I1_641_1_162}>
                    <View style={styles.View_I1_641_1_163}>
                      <View style={styles.View_I1_641_1_163_2740_49850}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c644/cbbf/27e03826e6f4dc69897f4af591c0e21c"
                          }}
                          style={styles.ImageBackground_I1_641_1_163_2740_49851}
                        />
                        <View style={styles.View_I1_641_1_163_2740_49852}>
                          <Text style={styles.Text_I1_641_1_163_2740_49852}>
                            54
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_I1_641_1_164}>
                      <View style={styles.View_I1_641_1_164_2740_49832}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2cc/099d/f9c7842cabe5718ebe8e76d765bbdff7"
                          }}
                          style={styles.ImageBackground_I1_641_1_164_2740_49833}
                        />
                        <View style={styles.View_I1_641_1_164_2740_49834}>
                          <Text style={styles.Text_I1_641_1_164_2740_49834}>
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
          <View style={styles.View_1_642}>
            <View style={styles.View_I1_642_1_22}>
              <View style={styles.View_I1_642_1_23}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e8a/b1d2/eef137e0a953637a198f7a63b5fd78d7"
                  }}
                  style={styles.ImageBackground_I1_642_1_23_2830_50337}
                />
                <View style={styles.View_I1_642_1_23_2733_49276}>
                  <Text style={styles.Text_I1_642_1_23_2733_49276}>
                    Madelyn Culhane
                  </Text>
                </View>
              </View>
              <View style={styles.View_I1_642_1_24}>
                <Text style={styles.Text_I1_642_1_24}>
                  Lorem ipsum dolor sit amet, consect ...
                </Text>
              </View>
            </View>
            <View style={styles.View_I1_642_1_25}>
              <View style={styles.View_I1_642_1_26}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f65/8b5c/48e13666332fedccaa84ccdd0642677f"
                  }}
                  style={styles.ImageBackground_I1_642_1_27}
                />
                <View style={styles.View_I1_642_1_28}>
                  <View style={styles.View_I1_642_1_29}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e8a/b1d2/eef137e0a953637a198f7a63b5fd78d7"
                      }}
                      style={styles.ImageBackground_I1_642_1_30}
                    />
                    <View style={styles.View_I1_642_1_31}>
                      <Text style={styles.Text_I1_642_1_31}>
                        Madelyn Culhane
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I1_642_1_32}>
                    <View style={styles.View_I1_642_1_33}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e253/64c0/ed2d285217b24473b56bf4dae159cf49"
                        }}
                        style={styles.ImageBackground_I1_642_1_34}
                      />
                    </View>
                    <View style={styles.View_I1_642_1_35}>
                      <View style={styles.View_I1_642_1_36}>
                        <Text style={styles.Text_I1_642_1_36}>
                          Lorem ipsum dolor sit amet, consect ...
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_I1_642_1_39}>
                <View style={styles.View_I1_642_1_40}>
                  <View style={styles.View_I1_642_1_40_2740_49850}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c644/cbbf/27e03826e6f4dc69897f4af591c0e21c"
                      }}
                      style={styles.ImageBackground_I1_642_1_40_2740_49851}
                    />
                    <View style={styles.View_I1_642_1_40_2740_49852}>
                      <Text style={styles.Text_I1_642_1_40_2740_49852}>54</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I1_642_1_41}>
                  <View style={styles.View_I1_642_1_41_2740_49832}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2cc/099d/f9c7842cabe5718ebe8e76d765bbdff7"
                      }}
                      style={styles.ImageBackground_I1_642_1_41_2740_49833}
                    />
                    <View style={styles.View_I1_642_1_41_2740_49834}>
                      <Text style={styles.Text_I1_642_1_41_2740_49834}>54</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_1_643}>
            <View style={styles.View_I1_643_1_145}>
              <View style={styles.View_I1_643_1_146}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/819d/ba25/445cdc7ac5e223262577300b4ab54c26"
                  }}
                  style={styles.ImageBackground_I1_643_1_146_2830_50337}
                />
                <View style={styles.View_I1_643_1_146_2733_49276}>
                  <Text style={styles.Text_I1_643_1_146_2733_49276}>
                    Emery Baptista
                  </Text>
                </View>
              </View>
              <View style={styles.View_I1_643_1_147}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d35c/bf37/d7872829443bfc1d578ab59719c6acf7"
                  }}
                  style={styles.ImageBackground_I1_643_1_148}
                />
                <View style={styles.View_I1_643_1_152}>
                  <View style={styles.View_I1_643_1_153}>
                    <View style={styles.View_I1_643_1_154}>
                      <View style={styles.View_I1_643_1_158}>
                        <Text style={styles.Text_I1_643_1_158}>
                          Lorem ipsum dolor sit amet, dolor sit amet
                          consectetur...
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I1_643_1_162}>
                    <View style={styles.View_I1_643_1_163}>
                      <View style={styles.View_I1_643_1_163_2740_49850}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c644/cbbf/27e03826e6f4dc69897f4af591c0e21c"
                          }}
                          style={styles.ImageBackground_I1_643_1_163_2740_49851}
                        />
                        <View style={styles.View_I1_643_1_163_2740_49852}>
                          <Text style={styles.Text_I1_643_1_163_2740_49852}>
                            54
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_I1_643_1_164}>
                      <View style={styles.View_I1_643_1_164_2740_49832}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2cc/099d/f9c7842cabe5718ebe8e76d765bbdff7"
                          }}
                          style={styles.ImageBackground_I1_643_1_164_2740_49833}
                        />
                        <View style={styles.View_I1_643_1_164_2740_49834}>
                          <Text style={styles.Text_I1_643_1_164_2740_49834}>
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
          <View style={styles.View_1_644}>
            <View style={styles.View_I1_644_1_210}>
              <View style={styles.View_I1_644_1_211}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e9a/3cf9/fe9c5f3493b40fc73e200352aaad0b07"
                  }}
                  style={styles.ImageBackground_I1_644_1_211_2830_50337}
                />
                <View style={styles.View_I1_644_1_211_2733_49276}>
                  <Text style={styles.Text_I1_644_1_211_2733_49276}>
                    Tiana Siphron
                  </Text>
                </View>
              </View>
              <View style={styles.View_I1_644_1_212}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba3b/f556/9930b2aef36de621211b8037629562b1"
                  }}
                  style={styles.ImageBackground_I1_644_1_213}
                />
                <View style={styles.View_I1_644_1_217}>
                  <View style={styles.View_I1_644_1_218}>
                    <View style={styles.View_I1_644_1_219}>
                      <View style={styles.View_I1_644_1_223}>
                        <Text style={styles.Text_I1_644_1_223}>
                          Lorem ipsum dolor sit amet, dolor sit amet
                          consectetur...
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_I1_644_1_227}>
                    <View style={styles.View_I1_644_1_228}>
                      <View style={styles.View_I1_644_1_228_2740_49850}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c644/cbbf/27e03826e6f4dc69897f4af591c0e21c"
                          }}
                          style={styles.ImageBackground_I1_644_1_228_2740_49851}
                        />
                        <View style={styles.View_I1_644_1_228_2740_49852}>
                          <Text style={styles.Text_I1_644_1_228_2740_49852}>
                            54
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_I1_644_1_229}>
                      <View style={styles.View_I1_644_1_229_2740_49832}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2cc/099d/f9c7842cabe5718ebe8e76d765bbdff7"
                          }}
                          style={styles.ImageBackground_I1_644_1_229_2740_49833}
                        />
                        <View style={styles.View_I1_644_1_229_2740_49834}>
                          <Text style={styles.Text_I1_644_1_229_2740_49834}>
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
      </View>
      <View style={styles.View_1_645}>
        <View style={styles.View_I1_645_2668_51065}>
          <Text style={styles.Text_I1_645_2668_51065}>Feed</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9676/094c/186014e5d2e08dd76fd752ea7f4921bf"
          }}
          style={styles.ImageBackground_I1_645_2668_51358}
        />
        <View style={styles.View_I1_645_2668_51360}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb8e/748b/27d8ecce4a6af15b72feb8f2bbb5c0aa"
            }}
            style={styles.ImageBackground_I1_645_2668_51360_1_426}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e05/9e5a/457f8b99da9604fa7ee1700fdac40f8c"
            }}
            style={styles.ImageBackground_I1_645_2668_51360_1_430}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fe4/5cb9/8cac0d6edd13dca2b8aa934732862efb"
            }}
            style={styles.ImageBackground_I1_645_2668_51360_1_434}
          />
          <View style={styles.View_I1_645_2668_51360_1_439}>
            <View style={styles.View_I1_645_2668_51360_1_440}>
              <Text style={styles.Text_I1_645_2668_51360_1_440}>9:41</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/40c6/7789/503d269f7edb50cc68c2c017bc266464"
          }}
          style={styles.ImageBackground_I1_645_4723_136902}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0390/9bc7/b5bb9ceae9394c04c86d863afda68f06"
          }}
          style={styles.ImageBackground_I1_645_5530_149559}
        />
      </View>
      <View style={styles.View_1_646}>
        <View style={styles.View_I1_646_5530_127698} />
        <View style={styles.View_I1_646_5530_127699}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/471f/9e2e/7f2d47b90deceabcc779bf3744bba5a1"
            }}
            style={styles.ImageBackground_I1_646_5530_127700}
          />
          <View style={styles.View_I1_646_5530_128848}>
            <Text style={styles.Text_I1_646_5530_128848}>Feed</Text>
          </View>
        </View>
        <View style={styles.View_I1_646_5530_127701}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/417c/0bdf/5b52eaa1333dd38f3215b677b7626385"
            }}
            style={styles.ImageBackground_I1_646_5530_127702}
          />
        </View>
        <View style={styles.View_I1_646_5530_127703}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cae1/8447/750b3a93fb91f0a5f7f4b279eaaeb707"
            }}
            style={styles.ImageBackground_I1_646_5530_127704}
          />
        </View>
        <View style={styles.View_I1_646_5530_127705}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a37/4386/b8ab77441b23306b91849cf32071576c"
            }}
            style={styles.ImageBackground_I1_646_5530_127708}
          />
        </View>
        <View style={styles.View_I1_646_5530_127712} />
        <View style={styles.View_I1_646_5530_127713}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e12b/d35b/359ba74d23e63e76d63654cd3773dcfd"
            }}
            style={styles.ImageBackground_I1_646_5530_127714}
          />
          <View style={styles.View_I1_646_5530_127716}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6893/2501/620f72b08987d809b7d6740e8543f587"
              }}
              style={styles.ImageBackground_I1_646_5530_127717}
            />
            <View style={styles.View_I1_646_5530_127718}>
              <View
                source={{ uri: "null" }}
                style={styles.View_I1_646_5530_127718_5429_126310}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2dc8/52d3/a01dc2e5c3421b9492a540bf877f4ba9"
                }}
                style={styles.ImageBackground_I1_646_5530_127718_5429_126311}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c074/bc17/04ec3e59cf2b9ef2f63cd7901ff21e83"
                }}
                style={styles.ImageBackground_I1_646_5530_127718_5429_126312}
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
  View_2: { height: hp("241%") },
  View_1_633: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1_633_1_3: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I1_633_1_3_3028_56957: {
    flexGrow: 1,
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I1_633_1_3_3028_56957: {
    color: "rgba(2, 9, 31, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_633_1_4: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I1_633_1_4_3028_56968: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I1_633_1_4_3028_56968: {
    color: "rgba(128, 132, 143, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_633_1_5: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I1_633_1_5_3028_56968: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I1_633_1_5_3028_56968: {
    color: "rgba(128, 132, 143, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_633_1_6: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I1_633_1_6_3028_56968: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I1_633_1_6_3028_56968: {
    color: "rgba(128, 132, 143, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_634: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("209%"),
    minHeight: hp("209%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("19%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_635: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("209%"),
    minHeight: hp("209%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_636: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_636_1_22: {
    flexGrow: 1,
    width: wp("42%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_636_1_23: {
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
  ImageBackground_I1_636_1_23_2830_50337: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1_636_1_23_2733_49276: {
    flexGrow: 1,
    width: wp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1_636_1_23_2733_49276: {
    color: "rgba(2, 9, 31, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_636_1_24: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_I1_636_1_24: {
    color: "rgba(32, 39, 51, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_636_1_25: {
    flexGrow: 1,
    width: wp("42%"),
    height: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_636_1_26: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_636_1_27: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1_636_1_28: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_636_1_29: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_636_1_30: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_636_1_31: {
    width: wp("29%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "center"
  },
  Text_I1_636_1_31: {
    color: "rgba(2, 9, 31, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_636_1_32: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I1_636_1_33: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_636_1_34: {
    flexGrow: 1,
    width: wp("39%"),
    height: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I1_636_1_35: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1_636_1_36: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I1_636_1_36: {
    color: "rgba(32, 39, 51, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_636_1_39: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_636_1_40: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_636_1_40_2740_49850: {
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
  ImageBackground_I1_636_1_40_2740_49851: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_636_1_40_2740_49852: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "center"
  },
  Text_I1_636_1_40_2740_49852: {
    color: "rgba(128, 132, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_636_1_41: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_636_1_41_2740_49832: {
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
  ImageBackground_I1_636_1_41_2740_49833: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_636_1_41_2740_49834: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "center"
  },
  Text_I1_636_1_41_2740_49834: {
    color: "rgba(128, 132, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_637: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("57%"),
    minHeight: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("50%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_637_1_145: {
    flexGrow: 1,
    width: wp("42%"),
    height: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_637_1_146: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_637_1_146_2830_50337: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1_637_1_146_2733_49276: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1_637_1_146_2733_49276: {
    color: "rgba(2, 9, 31, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_637_1_147: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I1_637_1_148: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("38%"),
    minHeight: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1_637_1_152: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1_637_1_153: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_637_1_154: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_637_1_158: {
    width: wp("37%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_637_1_158: {
    color: "rgba(2, 9, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_637_1_162: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_637_1_163: {
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
  View_I1_637_1_163_2740_49850: {
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
  ImageBackground_I1_637_1_163_2740_49851: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_637_1_163_2740_49852: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "center"
  },
  Text_I1_637_1_163_2740_49852: {
    color: "rgba(128, 132, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_637_1_164: {
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
  View_I1_637_1_164_2740_49832: {
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
  ImageBackground_I1_637_1_164_2740_49833: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_637_1_164_2740_49834: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "center"
  },
  Text_I1_637_1_164_2740_49834: {
    color: "rgba(128, 132, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_638: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("109%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_638_1_210: {
    flexGrow: 1,
    width: wp("42%"),
    height: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_638_1_211: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_638_1_211_2830_50337: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1_638_1_211_2733_49276: {
    flexGrow: 1,
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1_638_1_211_2733_49276: {
    color: "rgba(2, 9, 31, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_638_1_212: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I1_638_1_213: {
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
  View_I1_638_1_217: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1_638_1_218: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_638_1_219: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_638_1_223: {
    width: wp("37%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_638_1_223: {
    color: "rgba(2, 9, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_638_1_227: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_638_1_228: {
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
  View_I1_638_1_228_2740_49850: {
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
  ImageBackground_I1_638_1_228_2740_49851: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_638_1_228_2740_49852: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "center"
  },
  Text_I1_638_1_228_2740_49852: {
    color: "rgba(128, 132, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_638_1_229: {
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
  View_I1_638_1_229_2740_49832: {
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
  ImageBackground_I1_638_1_229_2740_49833: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_638_1_229_2740_49834: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "center"
  },
  Text_I1_638_1_229_2740_49834: {
    color: "rgba(128, 132, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_639: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("57%"),
    minHeight: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("152%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_639_1_145: {
    flexGrow: 1,
    width: wp("42%"),
    height: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_639_1_146: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_639_1_146_2830_50337: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1_639_1_146_2733_49276: {
    flexGrow: 1,
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1_639_1_146_2733_49276: {
    color: "rgba(2, 9, 31, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_639_1_147: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I1_639_1_148: {
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
  View_I1_639_1_152: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1_639_1_153: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_639_1_154: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_639_1_158: {
    width: wp("37%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_639_1_158: {
    color: "rgba(2, 9, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_639_1_162: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_639_1_163: {
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
  View_I1_639_1_163_2740_49850: {
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
  ImageBackground_I1_639_1_163_2740_49851: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_639_1_163_2740_49852: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "center"
  },
  Text_I1_639_1_163_2740_49852: {
    color: "rgba(128, 132, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_639_1_164: {
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
  View_I1_639_1_164_2740_49832: {
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
  ImageBackground_I1_639_1_164_2740_49833: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_639_1_164_2740_49834: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "center"
  },
  Text_I1_639_1_164_2740_49834: {
    color: "rgba(128, 132, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_640: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("209%"),
    minHeight: hp("209%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_641: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("57%"),
    minHeight: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_641_1_145: {
    flexGrow: 1,
    width: wp("42%"),
    height: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_641_1_146: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_641_1_146_2830_50337: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1_641_1_146_2733_49276: {
    flexGrow: 1,
    width: wp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1_641_1_146_2733_49276: {
    color: "rgba(2, 9, 31, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_641_1_147: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I1_641_1_148: {
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
  View_I1_641_1_152: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1_641_1_153: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_641_1_154: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_641_1_158: {
    width: wp("37%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_641_1_158: {
    color: "rgba(2, 9, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_641_1_162: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_641_1_163: {
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
  View_I1_641_1_163_2740_49850: {
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
  ImageBackground_I1_641_1_163_2740_49851: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_641_1_163_2740_49852: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "center"
  },
  Text_I1_641_1_163_2740_49852: {
    color: "rgba(128, 132, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_641_1_164: {
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
  View_I1_641_1_164_2740_49832: {
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
  ImageBackground_I1_641_1_164_2740_49833: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_641_1_164_2740_49834: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "center"
  },
  Text_I1_641_1_164_2740_49834: {
    color: "rgba(128, 132, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_642: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("60%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_642_1_22: {
    flexGrow: 1,
    width: wp("42%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_642_1_23: {
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
  ImageBackground_I1_642_1_23_2830_50337: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1_642_1_23_2733_49276: {
    flexGrow: 1,
    width: wp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1_642_1_23_2733_49276: {
    color: "rgba(2, 9, 31, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_642_1_24: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_I1_642_1_24: {
    color: "rgba(32, 39, 51, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_642_1_25: {
    flexGrow: 1,
    width: wp("42%"),
    height: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_642_1_26: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_642_1_27: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1_642_1_28: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_642_1_29: {
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
  ImageBackground_I1_642_1_30: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_642_1_31: {
    width: wp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "center"
  },
  Text_I1_642_1_31: {
    color: "rgba(2, 9, 31, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_642_1_32: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I1_642_1_33: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_642_1_34: {
    flexGrow: 1,
    width: wp("39%"),
    height: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1_642_1_35: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1_642_1_36: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I1_642_1_36: {
    color: "rgba(32, 39, 51, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_642_1_39: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_642_1_40: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_642_1_40_2740_49850: {
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
  ImageBackground_I1_642_1_40_2740_49851: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_642_1_40_2740_49852: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "center"
  },
  Text_I1_642_1_40_2740_49852: {
    color: "rgba(128, 132, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_642_1_41: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_642_1_41_2740_49832: {
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
  ImageBackground_I1_642_1_41_2740_49833: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_642_1_41_2740_49834: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "center"
  },
  Text_I1_642_1_41_2740_49834: {
    color: "rgba(128, 132, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_643: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("57%"),
    minHeight: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("109%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_643_1_145: {
    flexGrow: 1,
    width: wp("42%"),
    height: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_643_1_146: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_643_1_146_2830_50337: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1_643_1_146_2733_49276: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1_643_1_146_2733_49276: {
    color: "rgba(2, 9, 31, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_643_1_147: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I1_643_1_148: {
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
  View_I1_643_1_152: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1_643_1_153: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_643_1_154: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_643_1_158: {
    width: wp("37%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_643_1_158: {
    color: "rgba(2, 9, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_643_1_162: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_643_1_163: {
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
  View_I1_643_1_163_2740_49850: {
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
  ImageBackground_I1_643_1_163_2740_49851: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_643_1_163_2740_49852: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "center"
  },
  Text_I1_643_1_163_2740_49852: {
    color: "rgba(128, 132, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_643_1_164: {
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
  View_I1_643_1_164_2740_49832: {
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
  ImageBackground_I1_643_1_164_2740_49833: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_643_1_164_2740_49834: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "center"
  },
  Text_I1_643_1_164_2740_49834: {
    color: "rgba(128, 132, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_644: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("169%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_644_1_210: {
    flexGrow: 1,
    width: wp("42%"),
    height: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_644_1_211: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_644_1_211_2830_50337: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1_644_1_211_2733_49276: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1_644_1_211_2733_49276: {
    color: "rgba(2, 9, 31, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_644_1_212: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I1_644_1_213: {
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
  View_I1_644_1_217: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1_644_1_218: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_644_1_219: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_644_1_223: {
    width: wp("37%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_644_1_223: {
    color: "rgba(2, 9, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_644_1_227: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_644_1_228: {
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
  View_I1_644_1_228_2740_49850: {
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
  ImageBackground_I1_644_1_228_2740_49851: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_644_1_228_2740_49852: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "center"
  },
  Text_I1_644_1_228_2740_49852: {
    color: "rgba(128, 132, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_644_1_229: {
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
  View_I1_644_1_229_2740_49832: {
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
  ImageBackground_I1_644_1_229_2740_49833: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_644_1_229_2740_49834: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "center"
  },
  Text_I1_644_1_229_2740_49834: {
    color: "rgba(128, 132, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_645: {
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
  View_I1_645_2668_51065: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I1_645_2668_51065: {
    color: "rgba(2, 9, 31, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1_645_2668_51358: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("6%")
  },
  View_I1_645_2668_51360: {
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
  ImageBackground_I1_645_2668_51360_1_426: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("2%")
  },
  ImageBackground_I1_645_2668_51360_1_430: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("2%")
  },
  ImageBackground_I1_645_2668_51360_1_434: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  View_I1_645_2668_51360_1_439: {
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
  View_I1_645_2668_51360_1_440: {
    width: wp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-end"
  },
  Text_I1_645_2668_51360_1_440: {
    color: "rgba(2, 9, 31, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000003576278683,
    textTransform: "none"
  },
  ImageBackground_I1_645_4723_136902: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("7%")
  },
  ImageBackground_I1_645_5530_149559: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("7%")
  },
  View_1_646: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("231%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_646_5530_127698: {
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
  View_I1_646_5530_127699: {
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
  ImageBackground_I1_646_5530_127700: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_I1_646_5530_128848: {
    width: wp("6%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "center"
  },
  Text_I1_646_5530_128848: {
    color: "rgba(42, 176, 111, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_646_5530_127701: {
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
  ImageBackground_I1_646_5530_127702: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_I1_646_5530_127703: {
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
  ImageBackground_I1_646_5530_127704: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_I1_646_5530_127705: {
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
  ImageBackground_I1_646_5530_127708: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_I1_646_5530_127712: {
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
  View_I1_646_5530_127713: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("0%")
  },
  ImageBackground_I1_646_5530_127714: {
    width: wp("17%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_646_5530_127716: {
    width: wp("15%"),
    height: hp("8%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I1_646_5530_127717: {
    width: wp("15%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_646_5530_127718: {
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
  View_I1_646_5530_127718_5429_126310: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_646_5530_127718_5429_126311: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I1_646_5530_127718_5429_126312: {
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
