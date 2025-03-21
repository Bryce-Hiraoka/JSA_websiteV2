import React from "react";
import FamilyTree from "../components/FamilyTree";

// Sample JSON data for the family tree
const familyData = {
    "Theodore Chen": [
        "Micah Chan",
        "Umi Imai",
        "Peiyu Zhou",
        "Anna Trapani",
        "Prathika Rajkumar",
        "Chasen Matsuoka"
    ],
    "Amy Takahashi": [
        "Futaba Kikuchi",
        "Kalani Kwan",
        "Mitsuha Mashita",
        "Sara Sakurai",
        "Miu Kikuchi"
    ],
    "Kaede Kawata": [
        "Mew Kookitwatana",
        "Maiko Lum",
        "Nue Yamazaki",
        "Lili Hyde",
        "Theodore Chen"
    ],
    "Lili Hyde": [
        "Misora Ito"
    ],
    "Umi Imai": [
        "Sam Kraus",
        "Yuhan Peng",
        "Lan Lan Honda-Rottler",
        "Takahiro Ochi",
        "Akari Shiohara"
    ],
    "Wooju Chong": [
        "Amy Takahashi",
        "Ulises Barajas"
    ],
    "Mitsuha Mashita": [
        "Hugo Hasegawa",
        "Afiq Amjad Bin Kharir",
        "Jada Araki",
        "Maya Yoshimi Tarku",
        "Yuka Masamura"
    ],
    "Kalani Kwan": [
        "Joshua Alvarez",
        "Cynthia Li",
        "Namika Takeda",
        "Sarah Annis",
        "Will Martin ",
        "Wai Lun Mak",
        "Kaede Kawata"
    ],
    "Afiq Amjad Bin Kharir": [
        "Yuuki Hori",
        "Yuna Tanaka",
        "Cydni Oshiro",
        "Miori Kino",
        "Selina Xu",
        "Amane Sawamoto",
        "Alex Bischof",
        "Koya Weiss",
        "Sam Duan"
    ],
    "Yuka Masamura": [
        "Cristophe LaPine",
        "Sophia Igarashi",
        "Kazuya Shimada",
        "Jojo Pearlman",
        "Carly Hayle"
    ],
    "Ulises Barajas": [
        "Kaito Au"
    ],
    "Kaito Au": [
        "Miho Namba",
        "Christina Washington",
        "Patrick Stionov",
        "Kanade Shiono"
    ],
    "Christina Washington": [
        "Nicole Gouw",
        "Way Chen Lin",
        "Alec Stein",
        "David Ueda"
    ],
    "Yuuki Hori": [
        "Ian Lee",
        "Madoka Sumii",
        "Mimi Paule",
        "Jacqueline Wu",
        "Ichiyo Suzuki",
        "Yuto Kimura",
        "Hana Kawamura",
        "Riki Yoshida",
        "Lola Ohno",
        "Andrew Kashiwagi"
    ],
    "Sara Sakurai": [
        "Yoshiki Uno",
        "Ranran Sekimoto",
        "Minsung"
    ],
    "Yoshiki Uno": [
        "Eugene Reedy",
        "Charlotte Wang",
        "Julie Galliker",
        "Rino Fukukawa"
    ],
    "Shuhei Yamaguchi": [
        "Wooju Chong"
    ],
    "Miu Kikuchi": [
        "Mei Hashimoto",
        "Keita Fujino",
        "Iris Ho"
    ],
    "Sarah Annis": [
        "Haku ",
        "Hina Mitsune",
        "Daniel Ronkin",
        "Shion Takano",
        "Andrew Sasamori"
    ],
    "Cristophe LaPine": [
        "Stephanie Linn",
        "Monami Abo",
        "Emma Tio"
    ],
    "Hugo Hasegawa": [
        "Mikiya Hoshiai",
        "Jordan Lin",
        "Noe Ando",
        "Josh King",
        "Kyla Pascoe",
        "Gabby Lee",
        "Joeun Lee",
        "Jenny Aung",
        "Michelle Chen"
    ],
    "Ian Lee": [
        "Andre Massanobu Shibata",
        "Sota Sezai"
    ],
    "Cydni Oshiro": [
        "Hiyo Moriyama"
    ],
    "Alec Stein": [
        "Ryunosuke Watanabe",
        "Brian Zeng"
    ],
    "Shion Takano": [
        "Niki Taradash",
        "Amina Hachimura"
    ],
    "Jordan Lin": [
        "Michelle Leung",
        "Angelina Kondo",
        "Ibuki Nagasawa",
        "Eiki Hayasaki",
        "Christopher Miyai",
        "Eita Kikuchi",
        "Kazuto Satake"
    ],
    "Misora Ito": [
        "Malia Yu"
    ],
    "Noe Ando": [
        "Brady Schultz"
    ],
    "Miori Kino": [
        "Seira Serizawa",
        "Saya Ghinea",
        "Waka Miyashita",
        "Sarah Zhang"
    ],
    "Alex Bischof": [
        "Tomoki Narukawa",
        "Julian Lim Jun Ren",
        "Kate Eads",
        "Takahito Tokunaga"
    ],
    "Eiki Hayasaki": [
        "Supawat Pitaknarongphorn"
    ],
    "Jojo Pearlman": [
        "Tsubasa Tomono",
        "Chloe Ling",
        "Yuta Kikuchi"
    ],
    "Niki Taradash": [
        "Ella Sato-Connell"
    ],
    "Anna Trapani": [
        "Mahoko Tsukada",
        "Madoka Uo"
    ],
    "Sam Kraus": [
        "Kamahiwa Molitau",
        "Daisy Sun"
    ],
    "Tomoki Narukawa": [
        "Parker Hursty"
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
