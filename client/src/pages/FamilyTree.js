import React from "react";
import FamilyTree from "../components/FamilyTree";

// Sample JSON data for the family tree
const familyData = {
  "name": "Honoka Watanabe",
  "children": [
      {
          "name": "Jake Gill",
          "children": [
              {
                  "name": "Lewis Ream",
                  "children": [
                      {
                          "name": "Ross Sheng",
                          "children": [
                              {
                                  "name": "Kyle Matthews",
                                  "children": [
                                      {
                                          "name": "Mao Matsuo",
                                          "children": [
                                              {
                                                  "name": "Kohji Numata",
                                                  "children": [
                                                      {
                                                          "name": "Bryce Hiraoka"
                                                      },
                                                      {
                                                          "name": "Charles Son"
                                                      },
                                                      {
                                                          "name": "Kaishu Murai"
                                                      },
                                                      {
                                                          "name": "Elizabeth Bright"
                                                      },
                                                      {
                                                          "name": "Rakuyo Tamada",
                                                          "children": [
                                                              {
                                                                  "name": "Mark Meyer"
                                                              },
                                                              {
                                                                  "name": "Kent Liao"
                                                              }
                                                          ]
                                                      },
                                                      {
                                                          "name": "Ryo Nambara"
                                                      },
                                                      {
                                                          "name": "Shunya Uchida"
                                                      },
                                                      {
                                                          "name": "Steve Cheng"
                                                      },
                                                      {
                                                          "name": "Yoko Sezai"
                                                      },
                                                      {
                                                          "name": "Emika Hammond",
                                                          "children": [
                                                              {
                                                                  "name": "Rio Takesue"
                                                              }
                                                          ]
                                                      },
                                                      {
                                                          "name": "Hiroki Ito",
                                                          "children": [
                                                              {
                                                                  "name": "Kyoto Oku"
                                                              }
                                                          ]
                                                      },
                                                      {
                                                          "name": "Ethan Gerhardt"
                                                      }
                                                  ]
                                              },
                                              {
                                                  "name": "Kenny Horikawa"
                                              },
                                              {
                                                  "name": "Ulala Kajioka",
                                                  "children": [
                                                      {
                                                          "name": "Airi Hatori",
                                                          "children": [
                                                              {
                                                                  "name": "Remi Hayashi",
                                                                  "children": [
                                                                      {
                                                                          "name": "Samantha Makishima"
                                                                      },
                                                                      {
                                                                          "name": "Robbie Klauzinski"
                                                                      }
                                                                  ]
                                                              },
                                                              {
                                                                  "name": "Alina Kenny"
                                                              },
                                                              {
                                                                  "name": "Taizo Azuchi"
                                                              },
                                                              {
                                                                  "name": "Ellie Nakasone",
                                                                  "children": [
                                                                      {
                                                                          "name": "Joshua Cappiello"
                                                                      },
                                                                      {
                                                                          "name": "Joelle Watanabe"
                                                                      }
                                                                  ]
                                                              }
                                                          ]
                                                      },
                                                      {
                                                          "name": "Suzuka Kojima"
                                                      },
                                                      {
                                                          "name": "Miyano Motoki"
                                                      },
                                                      {
                                                          "name": "Sora Kikuchi",
                                                          "children": [
                                                              {
                                                                  "name": "Ryo Sasaki",
                                                                  "children": [
                                                                      {
                                                                          "name": "Alyssa Ong"
                                                                      },
                                                                      {
                                                                          "name": "Sakura Rosenthal"
                                                                      },
                                                                      {
                                                                          "name": "Derek Han"
                                                                      }
                                                                  ]
                                                              },
                                                              {
                                                                  "name": "Elena Noda",
                                                                  "children": [
                                                                      {
                                                                          "name": "Kotori Fukai"
                                                                      },
                                                                      {
                                                                          "name": "Sky Voong"
                                                                      },
                                                                      {
                                                                          "name": "Nana Shigematsu"
                                                                      },
                                                                      {
                                                                          "name": "Simon Yoshizaki"
                                                                      }
                                                                  ]
                                                              }
                                                          ]
                                                      },
                                                      {
                                                          "name": "Wataru Hoshi"
                                                      }
                                                  ]
                                              },
                                              {
                                                  "name": "Hannah Finn"
                                              },
                                              {
                                                  "name": "Lionel Chen"
                                              },
                                              {
                                                  "name": "Ryuichi Ohhata"
                                              }
                                          ]
                                      }
                                  ]
                              }
                          ]
                      }
                  ]
              }
          ]
      }
  ]
};

const FamilyTreePage = () => {
  return (
    <div style={{}}>
      <h2 style={styles.title}>Family Tree</h2>
      <FamilyTree data={familyData} />
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "20px",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
  },
};

export default FamilyTreePage;
