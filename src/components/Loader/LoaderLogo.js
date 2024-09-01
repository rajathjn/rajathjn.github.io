import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        className="raw_logo"
        width="50%"
        height="40%"
        viewBox="0 0 1000 305"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="myName"
          d="M134.48 85.888C135.056 86.272 135.472 86.624 135.728 86.944C135.984 87.328 136.112 87.872 136.112 88.576C136.112 90.432 135.344 92.224 133.808 93.952C132.336 95.68 130.032 97.088 126.896 98.176C123.824 99.328 119.984 99.904 115.376 99.904C105.264 99.904 95.216 97.184 85.232 91.744C75.312 86.368 66.096 79.392 57.584 70.816C49.136 62.176 41.584 52.864 34.928 42.88C34.992 42.304 35.12 41.92 35.312 41.728C35.568 41.472 35.888 41.312 36.272 41.248C41.904 40.672 46.448 39.968 49.904 39.136C53.36 38.24 56.144 36.832 58.256 34.912C60.432 32.928 61.52 30.176 61.52 26.656C61.52 21.6 59.536 17.856 55.568 15.424C51.6 12.992 46.48 11.776 40.208 11.776C38.8 11.776 37.744 11.904 37.04 12.16C36.336 12.416 35.888 12.96 35.696 13.792C32.368 26.464 29.456 40.128 26.96 54.784L23.504 75.616C21.904 75.488 19.984 75.808 17.744 76.576C15.568 77.408 14.224 78.272 13.712 79.168C13.584 79.168 13.36 79.072 13.04 78.88C12.784 78.752 12.592 78.656 12.464 78.592C14.704 69.888 17.552 57.44 21.008 41.248C24.464 25.056 26.192 15.808 26.192 13.504C26.192 12.928 26.032 12.576 25.712 12.448C25.456 12.256 24.944 12.16 24.176 12.16C21.424 12.16 18.896 12.896 16.592 14.368C14.352 15.776 12.592 17.664 11.312 20.032C10.032 22.4 9.392 24.96 9.392 27.712C9.392 31.68 10.672 34.88 13.232 37.312C12.4 37.312 11.12 37.184 9.392 36.928C7.728 36.608 6.448 36.288 5.552 35.968C4.016 35.392 2.832 34.304 2 32.704C1.168 31.104 0.752 29.28 0.752 27.232C0.752 23.072 2.384 19.52 5.648 16.576C8.976 13.568 13.392 11.328 18.896 9.856C24.4 8.32 30.384 7.55199 36.848 7.55199C42.48 7.55199 47.888 8.16 53.072 9.376C58.256 10.528 62.512 12.384 65.84 14.944C69.232 17.44 70.928 20.608 70.928 24.448C70.928 27.712 69.712 30.72 67.28 33.472C64.912 36.224 61.776 38.528 57.872 40.384C54.032 42.24 50 43.552 45.776 44.32C49.616 51.296 55.248 58.464 62.672 65.824C70.16 73.184 78.64 79.328 88.112 84.256C97.648 89.248 107.184 91.744 116.72 91.744C121.072 91.744 124.752 91.2 127.76 90.112C130.832 89.088 133.072 87.68 134.48 85.888Z"
          stroke={theme.body}
          stroke-width="3"
        />

        <path
          className="myName"
          d="M166.568 64.096C167.336 64.608 167.72 65.344 167.72 66.304C167.72 67.968 166.984 69.6 165.512 71.2C164.104 72.8 162.28 74.112 160.04 75.136C157.864 76.096 155.72 76.576 153.608 76.576C150.28 76.576 147.72 75.36 145.928 72.928C144.2 70.432 143.112 68.288 142.664 66.496C142.28 64.64 141.736 61.344 141.032 56.608C140.84 55.264 140.488 54.4 139.976 54.016C139.464 53.568 138.472 53.344 137 53.344L120.776 53.44C115.528 61.952 110.792 68.032 106.568 71.68C102.344 75.264 97.864 77.056 93.128 77.056C90.184 77.056 87.944 76.48 86.408 75.328C84.872 74.176 84.104 72.672 84.104 70.816C84.104 69.344 84.584 68.032 85.544 66.88C86.504 65.728 87.848 64.928 89.576 64.48C89.576 67.04 89.928 68.768 90.632 69.664C91.4 70.496 92.616 70.912 94.28 70.912C97.48 70.912 100.584 69.664 103.592 67.168C106.664 64.608 110.504 60 115.112 53.344C113.64 53.216 112.584 52.96 111.944 52.576C111.368 52.192 111.08 51.616 111.08 50.848C111.08 50.272 111.24 49.504 111.56 48.544C111.88 47.52 112.2 46.88 112.52 46.624C113.544 47.008 115.624 47.424 118.76 47.872C122.344 42.432 126.248 36.256 130.472 29.344C134.696 22.432 137.256 18.24 138.152 16.768C139.368 14.784 141.096 11.936 143.336 8.224C144.104 7.072 144.776 6.24 145.352 5.72799C145.992 5.216 146.792 4.96 147.752 4.96C148.584 4.96 149.576 5.12 150.728 5.44C150.024 6.592 149.48 8.256 149.096 10.432C148.776 12.608 148.584 14.944 148.52 17.44L148.424 21.376C148.424 24.704 148.488 28.608 148.616 33.088C148.808 37.504 149 41.12 149.192 43.936C149.576 49.568 150.024 54.112 150.536 57.568C151.048 60.96 151.912 63.808 153.128 66.112C154.408 68.352 156.168 69.472 158.408 69.472C159.88 69.472 161.32 68.992 162.728 68.032C164.136 67.008 165.416 65.696 166.568 64.096ZM133.64 48.832C135.432 48.832 137.672 48.768 140.36 48.64L140.264 33.568C140.264 28.192 140.488 23.744 140.936 20.224C135.048 29.632 131.496 35.392 130.28 37.504L123.848 48.352C127.496 48.672 130.76 48.832 133.64 48.832Z"
          stroke={theme.body}
          stroke-width="3"
        />

        <path
          className="myName"
          d="M184.648 92.128C181.832 92.128 179.528 91.872 177.736 91.36C175.88 90.848 173.8 90.048 171.496 88.96C171.176 86.72 171.016 84.544 171.016 82.432C171.016 80.384 171.016 79.232 171.016 78.976L172.648 78.592C173.928 81.984 175.528 84.448 177.448 85.984C179.304 87.52 182.152 88.288 185.992 88.288C189.576 88.288 192.584 87.584 195.016 86.176C197.512 84.768 199.656 82.464 201.448 79.264C203.24 76.064 204.808 71.712 206.152 66.208C207.56 60.64 209.576 51.136 212.2 37.696C214.888 24.192 216.232 16.32 216.232 14.08C216.232 13.376 216.04 12.928 215.656 12.736C215.272 12.48 214.536 12.352 213.448 12.352C209.736 12.352 206.184 12.96 202.792 14.176C199.4 15.392 196.648 17.184 194.536 19.552C192.424 21.92 191.368 24.736 191.368 28C191.368 30.176 191.848 32.128 192.808 33.856C193.768 35.584 195.08 36.896 196.744 37.792C195.656 37.984 194.728 38.08 193.96 38.08C190.568 37.248 187.88 35.904 185.896 34.048C183.976 32.128 183.016 29.664 183.016 26.656C183.016 19.808 187.88 14.88 197.608 11.872C207.4 8.864 220.232 7.36 236.104 7.36C236.872 7.36 237.384 8.832 237.64 11.776L229.768 11.584C228.36 11.584 227.304 11.776 226.6 12.16C225.896 12.544 225.32 13.28 224.872 14.368C224.488 15.456 224.04 17.248 223.528 19.744C222.824 23.072 221.384 30.976 219.208 43.456C218.76 45.888 218.024 49.952 217 55.648C215.976 61.28 215.208 65.184 214.696 67.36C212.712 75.68 209.128 81.888 203.944 85.984C198.824 90.08 192.392 92.128 184.648 92.128Z"
          stroke={theme.body}
          stroke-width="3"
        />

        <path
          className="myName"
          d="M341 48.064C337.864 47.104 335.272 45.28 333.224 42.592C331.24 39.84 330.248 36.288 330.248 31.936C330.248 26.816 331.688 22.368 334.568 18.592C337.448 14.752 341.416 11.808 346.472 9.75999C351.528 7.71199 357.256 6.68799 363.656 6.68799C366.728 6.68799 369.704 6.91199 372.584 7.36C375.528 7.744 378.92 8.32 382.76 9.088C385.064 9.536 387.368 9.952 389.672 10.336C391.976 10.656 393.96 10.816 395.624 10.816C398.44 10.816 401 10.368 403.304 9.472C405.672 8.512 407.592 7.008 409.064 4.96C408.808 9.376 407.336 12.864 404.648 15.424C401.96 17.92 398.184 19.168 393.32 19.168C390.504 19.168 387.656 18.816 384.776 18.112C381.96 17.344 378.248 16.224 373.64 14.752C369.8 13.408 366.568 12.416 363.944 11.776C361.32 11.072 358.856 10.72 356.552 10.72C352.904 10.72 349.8 11.648 347.24 13.504C344.68 15.36 342.728 17.792 341.384 20.8C340.104 23.744 339.464 26.912 339.464 30.304C339.464 34.08 340.36 37.28 342.152 39.904C344.008 42.528 346.984 44.832 351.08 46.816L350.696 47.296C345.704 47.296 342.472 47.552 341 48.064ZM337.928 77.44C335.048 77.44 332.36 77.152 329.864 76.576C327.368 76.064 325.32 75.456 323.72 74.752C323.208 72.768 322.952 70.56 322.952 68.128L323.528 67.072C327.688 71.552 332.648 73.792 338.408 73.792C349.032 73.792 356.04 66.432 359.432 51.712C362.376 39.104 364.648 29.632 366.248 23.296C367.528 21.568 369.064 20.032 370.856 18.688C372.712 17.28 374.408 16.256 375.944 15.616L376.808 15.904C375.656 18.336 374.6 21.568 373.64 25.6C372.68 29.568 371.432 35.264 369.896 42.688C369.384 45.504 368.776 48.416 368.072 51.424C365.832 60.512 362.056 67.136 356.744 71.296C351.496 75.392 345.224 77.44 337.928 77.44Z"
          stroke={theme.body}
          stroke-width="3"
        />

        <path
          className="myName"
          d="M469.72 71.104C472.792 71.104 475.384 70.784 477.496 70.144C479.608 69.44 481.528 68.544 483.256 67.456C483.32 67.712 483.352 68.064 483.352 68.512C483.352 70.112 482.52 71.552 480.856 72.832C479.256 74.048 477.24 74.976 474.808 75.616C472.44 76.256 470.2 76.576 468.088 76.576C464.504 76.576 461.336 75.808 458.584 74.272C455.832 72.736 454.328 70.72 454.072 68.224C453.88 66.56 454.104 63.424 454.744 58.816C455.384 54.208 456.248 49.248 457.336 43.936C454.904 43.872 450.776 43.84 444.952 43.84C437.912 43.84 432.504 43.872 428.728 43.936C425.144 59.296 422.808 69.216 421.72 73.696C421.592 74.336 421.4 74.752 421.144 74.944C420.952 75.136 420.568 75.264 419.992 75.328C417.368 75.456 415.608 75.616 414.712 75.808C413.816 75.936 412.856 76.224 411.832 76.672L411.256 76.48L412.984 71.872C415.096 66.368 416.76 61.76 417.976 58.048C419.192 54.272 420.408 49.568 421.624 43.936H419.992C419.352 43.936 418.68 43.424 417.976 42.4C417.336 41.312 417.016 40.32 417.016 39.424C417.016 39.04 417.112 38.784 417.304 38.656C417.56 38.528 418.008 38.464 418.648 38.464C418.904 38.464 419.352 38.496 419.992 38.56C420.632 38.56 421.56 38.56 422.776 38.56C424.824 28.128 425.848 20.96 425.848 17.056C425.848 15.584 425.592 14.624 425.08 14.176C424.568 13.664 423.544 13.408 422.008 13.408C420.92 13.408 419.448 13.504 417.592 13.696C415.736 13.824 414.264 13.984 413.176 14.176C412.92 13.664 412.696 13.056 412.504 12.352C412.376 11.584 412.312 10.944 412.312 10.432C412.312 9.6 412.696 9.184 413.464 9.184C422.872 8.928 428.728 8.704 431.032 8.512C433.336 8.32 434.712 8.224 435.16 8.224C436.376 8.224 436.984 8.48 436.984 8.992C436.984 10.208 435.384 17.088 432.184 29.632L429.976 38.848C435.864 38.976 441.336 39.04 446.392 39.04C451.896 39.04 455.896 39.008 458.392 38.944C460.568 29.088 463.256 18.848 466.456 8.224C466.84 6.88 467.416 5.952 468.184 5.44C469.528 4.416 472.472 3.328 477.016 2.17599C481.56 1.02399 484.696 0.447994 486.424 0.447994C487.576 0.447994 488.312 0.799995 488.632 1.504C488.952 2.208 489.112 3.04 489.112 3.99999C487.448 3.99999 485.048 4.608 481.912 5.824C478.776 7.04 476.696 8.288 475.672 9.568C474.52 11.04 472.888 14.848 470.776 20.992C468.728 27.072 467.096 32.96 465.88 38.656C463.96 47.616 463 55.776 463 63.136C463 65.44 463.16 67.136 463.48 68.224C463.864 69.312 464.504 70.08 465.4 70.528C466.296 70.912 467.736 71.104 469.72 71.104Z"
          stroke={theme.body}
          stroke-width="3"
        />

        <path
          className="myName"
          d="M314.568 64.096C315.336 64.608 315.72 65.344 315.72 66.304C315.72 67.968 314.984 69.6 313.512 71.2C312.104 72.8 310.28 74.112 308.04 75.136C305.864 76.096 303.72 76.576 301.608 76.576C298.28 76.576 295.72 75.36 293.928 72.928C292.2 70.432 291.112 68.288 290.664 66.496C290.28 64.64 289.736 61.344 289.032 56.608C288.84 55.264 288.488 54.4 287.976 54.016C287.464 53.568 286.472 53.344 285 53.344L268.776 53.44C263.528 61.952 258.792 68.032 254.568 71.68C250.344 75.264 245.864 77.056 241.128 77.056C238.184 77.056 235.944 76.48 234.408 75.328C232.872 74.176 232.104 72.672 232.104 70.816C232.104 69.344 232.584 68.032 233.544 66.88C234.504 65.728 235.848 64.928 237.576 64.48C237.576 67.04 237.928 68.768 238.632 69.664C239.4 70.496 240.616 70.912 242.28 70.912C245.48 70.912 248.584 69.664 251.592 67.168C254.664 64.608 258.504 60 263.112 53.344C261.64 53.216 260.584 52.96 259.944 52.576C259.368 52.192 259.08 51.616 259.08 50.848C259.08 50.272 259.24 49.504 259.56 48.544C259.88 47.52 260.2 46.88 260.52 46.624C261.544 47.008 263.624 47.424 266.76 47.872C270.344 42.432 274.248 36.256 278.472 29.344C282.696 22.432 285.256 18.24 286.152 16.768C287.368 14.784 289.096 11.936 291.336 8.224C292.104 7.072 292.776 6.24 293.352 5.72799C293.992 5.216 294.792 4.96 295.752 4.96C296.584 4.96 297.576 5.12 298.728 5.44C298.024 6.592 297.48 8.256 297.096 10.432C296.776 12.608 296.584 14.944 296.52 17.44L296.424 21.376C296.424 24.704 296.488 28.608 296.616 33.088C296.808 37.504 297 41.12 297.192 43.936C297.576 49.568 298.024 54.112 298.536 57.568C299.048 60.96 299.912 63.808 301.128 66.112C302.408 68.352 304.168 69.472 306.408 69.472C307.88 69.472 309.32 68.992 310.728 68.032C312.136 67.008 313.416 65.696 314.568 64.096ZM281.64 48.832C283.432 48.832 285.672 48.768 288.36 48.64L288.264 33.568C288.264 28.192 288.488 23.744 288.936 20.224C283.048 29.632 279.496 35.392 278.28 37.504L271.848 48.352C275.496 48.672 278.76 48.832 281.64 48.832Z"
          stroke={theme.body}
          stroke-width="3"
        />

        <path
          className="myName"
          d="M800.152 243.888C801.304 245.232 801.88 246.672 801.88 248.208C801.88 250.64 800.856 252.752 798.808 254.544C796.76 256.4 793.88 257.808 790.168 258.768C786.456 259.792 782.168 260.304 777.304 260.304C766.168 260.304 755.288 257.68 744.664 252.432C734.104 247.184 724.408 240.272 715.576 231.696C706.808 223.056 699.224 213.584 692.824 203.28C692.312 205.776 691.32 210.736 689.848 218.16C688.696 224.176 687.8 228.656 687.16 231.6C686.968 232.56 686.68 233.2 686.296 233.52C685.976 233.84 685.464 234 684.76 234C681.752 234.064 679.8 234.16 678.904 234.288C678.008 234.416 677.272 234.704 676.696 235.152C675.992 235.152 675.64 234.928 675.64 234.48C677.944 229.424 680.664 220.176 683.8 206.736C687 193.232 689.208 182.832 690.424 175.536C690.68 173.872 690.808 172.944 690.808 172.752C690.808 172.048 690.648 171.632 690.328 171.504C690.008 171.312 689.432 171.216 688.6 171.216C686.872 171.216 684.984 171.376 682.936 171.696C680.76 171.952 679.128 172.08 678.04 172.08C677.144 172.08 676.504 171.984 676.12 171.792C675.8 171.6 675.64 171.216 675.64 170.64C675.64 169.488 675.928 168.144 676.504 166.608C677.08 165.072 677.688 164.304 678.328 164.304C678.392 165.456 679.576 166.192 681.88 166.512C684.184 166.768 687.256 166.896 691.096 166.896C694.744 166.896 699.8 166.608 706.264 166.032C707.224 165.904 708.6 165.776 710.392 165.648C710.392 166.16 710.296 167.024 710.104 168.24C709.912 169.456 709.784 170.256 709.72 170.64L701.944 170.832C701.112 170.832 700.568 171.248 700.312 172.08C698.072 179.888 695.768 189.392 693.4 200.592C696.024 198.672 698.936 196.432 702.136 193.872C705.336 191.248 708.472 188.656 711.544 186.096C717.432 181.168 722.36 177.136 726.328 174C730.296 170.864 734.424 167.888 738.712 165.072H740.248C740.824 165.392 742.648 165.808 745.72 166.32C747.64 166.64 748.856 166.896 749.368 167.088V167.856C748.344 167.664 744.664 169.68 738.328 173.904C732.056 178.128 725.144 183.024 717.592 188.592C710.04 194.16 704.472 198.384 700.888 201.264C707.096 210.8 714.488 219.408 723.064 227.088C731.64 234.704 740.696 240.688 750.232 245.04C759.768 249.456 769.016 251.664 777.976 251.664C783.096 251.664 787.416 250.96 790.936 249.552C794.52 248.208 797.592 246.32 800.152 243.888Z"
          stroke={theme.body}
          stroke-width="3"
        />

        <path
          className="myName"
          d="M820.568 222.096C821.336 222.608 821.72 223.344 821.72 224.304C821.72 225.968 820.984 227.6 819.512 229.2C818.104 230.8 816.28 232.112 814.04 233.136C811.864 234.096 809.72 234.576 807.608 234.576C804.28 234.576 801.72 233.36 799.928 230.928C798.2 228.432 797.112 226.288 796.664 224.496C796.28 222.64 795.736 219.344 795.032 214.608C794.84 213.264 794.488 212.4 793.976 212.016C793.464 211.568 792.472 211.344 791 211.344L774.776 211.44C769.528 219.952 764.792 226.032 760.568 229.68C756.344 233.264 751.864 235.056 747.128 235.056C744.184 235.056 741.944 234.48 740.408 233.328C738.872 232.176 738.104 230.672 738.104 228.816C738.104 227.344 738.584 226.032 739.544 224.88C740.504 223.728 741.848 222.928 743.576 222.48C743.576 225.04 743.928 226.768 744.632 227.664C745.4 228.496 746.616 228.912 748.28 228.912C751.48 228.912 754.584 227.664 757.592 225.168C760.664 222.608 764.504 218 769.112 211.344C767.64 211.216 766.584 210.96 765.944 210.576C765.368 210.192 765.08 209.616 765.08 208.848C765.08 208.272 765.24 207.504 765.56 206.544C765.88 205.52 766.2 204.88 766.52 204.624C767.544 205.008 769.624 205.424 772.76 205.872C776.344 200.432 780.248 194.256 784.472 187.344C788.696 180.432 791.256 176.24 792.152 174.768C793.368 172.784 795.096 169.936 797.336 166.224C798.104 165.072 798.776 164.24 799.352 163.728C799.992 163.216 800.792 162.96 801.752 162.96C802.584 162.96 803.576 163.12 804.728 163.44C804.024 164.592 803.48 166.256 803.096 168.432C802.776 170.608 802.584 172.944 802.52 175.44L802.424 179.376C802.424 182.704 802.488 186.608 802.616 191.088C802.808 195.504 803 199.12 803.192 201.936C803.576 207.568 804.024 212.112 804.536 215.568C805.048 218.96 805.912 221.808 807.128 224.112C808.408 226.352 810.168 227.472 812.408 227.472C813.88 227.472 815.32 226.992 816.728 226.032C818.136 225.008 819.416 223.696 820.568 222.096ZM787.64 206.832C789.432 206.832 791.672 206.768 794.36 206.64L794.264 191.568C794.264 186.192 794.488 181.744 794.936 178.224C789.048 187.632 785.496 193.392 784.28 195.504L777.848 206.352C781.496 206.672 784.76 206.832 787.64 206.832Z"
          stroke={theme.body}
          stroke-width="3"
        />

        <path
          className="myName"
          d="M840.024 235.152C837.016 235.152 834.104 234.832 831.288 234.192C828.536 233.552 826.232 232.752 824.376 231.792C822.584 230.832 821.464 229.904 821.016 229.008C821.336 227.408 821.656 225.136 821.976 222.192C822.36 219.184 822.584 216.976 822.648 215.568C823.352 214.992 824.248 214.64 825.336 214.512C825.592 219.632 826.904 223.568 829.272 226.32C831.64 229.008 835.064 230.352 839.544 230.352C844.216 230.352 847.928 228.976 850.68 226.224C853.496 223.472 854.904 219.952 854.904 215.664C854.904 213.552 854.52 211.76 853.752 210.288C853.048 208.752 852.056 207.44 850.776 206.352C849.56 205.2 847.8 203.856 845.496 202.32C842.296 200.08 839.704 198.128 837.72 196.464C835.8 194.736 834.264 192.816 833.112 190.704C831.96 188.528 831.384 186.064 831.384 183.312C831.384 179.792 832.344 176.752 834.264 174.192C836.248 171.568 838.904 169.584 842.232 168.24C845.624 166.832 849.4 166.128 853.56 166.128C857.592 166.128 861.272 166.736 864.6 167.952C867.928 169.104 870.04 170.352 870.936 171.696C868.376 177.456 866.872 181.328 866.424 183.312C865.464 183.696 864.312 183.888 862.968 183.888C863.8 181.648 864.216 179.696 864.216 178.032C864.216 175.472 863.224 173.52 861.24 172.176C859.32 170.832 856.792 170.16 853.656 170.16C849.176 170.16 845.848 171.376 843.672 173.808C841.56 176.24 840.504 179.056 840.504 182.256C840.504 185.328 841.464 187.92 843.384 190.032C845.304 192.144 847.8 194.128 850.872 195.984C854.2 198.032 856.824 199.824 858.744 201.36C860.664 202.832 862.264 204.688 863.544 206.928C864.888 209.168 865.56 211.856 865.56 214.992C865.56 219.152 864.408 222.768 862.104 225.84C859.8 228.848 856.696 231.152 852.792 232.752C848.952 234.352 844.696 235.152 840.024 235.152Z"
          stroke={theme.body}
          stroke-width="3"
        />

        <path
          className="myName"
          d="M938.72 229.104C941.792 229.104 944.384 228.784 946.496 228.144C948.608 227.44 950.528 226.544 952.256 225.456C952.32 225.712 952.352 226.064 952.352 226.512C952.352 228.112 951.52 229.552 949.856 230.832C948.256 232.048 946.24 232.976 943.808 233.616C941.44 234.256 939.2 234.576 937.088 234.576C933.504 234.576 930.336 233.808 927.584 232.272C924.832 230.736 923.328 228.72 923.072 226.224C922.88 224.56 923.104 221.424 923.744 216.816C924.384 212.208 925.248 207.248 926.336 201.936C923.904 201.872 919.776 201.84 913.952 201.84C906.912 201.84 901.504 201.872 897.728 201.936C894.144 217.296 891.808 227.216 890.72 231.696C890.592 232.336 890.4 232.752 890.144 232.944C889.952 233.136 889.568 233.264 888.992 233.328C886.368 233.456 884.608 233.616 883.712 233.808C882.816 233.936 881.856 234.224 880.832 234.672L880.256 234.48L881.984 229.872C884.096 224.368 885.76 219.76 886.976 216.048C888.192 212.272 889.408 207.568 890.624 201.936H888.992C888.352 201.936 887.68 201.424 886.976 200.4C886.336 199.312 886.016 198.32 886.016 197.424C886.016 197.04 886.112 196.784 886.304 196.656C886.56 196.528 887.008 196.464 887.648 196.464C887.904 196.464 888.352 196.496 888.992 196.56C889.632 196.56 890.56 196.56 891.776 196.56C893.824 186.128 894.848 178.96 894.848 175.056C894.848 173.584 894.592 172.624 894.08 172.176C893.568 171.664 892.544 171.408 891.008 171.408C889.92 171.408 888.448 171.504 886.592 171.696C884.736 171.824 883.264 171.984 882.176 172.176C881.92 171.664 881.696 171.056 881.504 170.352C881.376 169.584 881.312 168.944 881.312 168.432C881.312 167.6 881.696 167.184 882.464 167.184C891.872 166.928 897.728 166.704 900.032 166.512C902.336 166.32 903.712 166.224 904.16 166.224C905.376 166.224 905.984 166.48 905.984 166.992C905.984 168.208 904.384 175.088 901.184 187.632L898.976 196.848C904.864 196.976 910.336 197.04 915.392 197.04C920.896 197.04 924.896 197.008 927.392 196.944C929.568 187.088 932.256 176.848 935.456 166.224C935.84 164.88 936.416 163.952 937.184 163.44C938.528 162.416 941.472 161.328 946.016 160.176C950.56 159.024 953.696 158.448 955.424 158.448C956.576 158.448 957.312 158.8 957.632 159.504C957.952 160.208 958.112 161.04 958.112 162C956.448 162 954.048 162.608 950.912 163.824C947.776 165.04 945.696 166.288 944.672 167.568C943.52 169.04 941.888 172.848 939.776 178.992C937.728 185.072 936.096 190.96 934.88 196.656C932.96 205.616 932 213.776 932 221.136C932 223.44 932.16 225.136 932.48 226.224C932.864 227.312 933.504 228.08 934.4 228.528C935.296 228.912 936.736 229.104 938.72 229.104Z"
          stroke={theme.body}
          stroke-width="3"
        />

        <path
          className="myName"
          d="M248.648 250.128C245.832 250.128 243.528 249.872 241.736 249.36C239.88 248.848 237.8 248.048 235.496 246.96C235.176 244.72 235.016 242.544 235.016 240.432C235.016 238.384 235.016 237.232 235.016 236.976L236.648 236.592C237.928 239.984 239.528 242.448 241.448 243.984C243.304 245.52 246.152 246.288 249.992 246.288C253.576 246.288 256.584 245.584 259.016 244.176C261.512 242.768 263.656 240.464 265.448 237.264C267.24 234.064 268.808 229.712 270.152 224.208C271.56 218.64 273.576 209.136 276.2 195.696C278.888 182.192 280.232 174.32 280.232 172.08C280.232 171.376 280.04 170.928 279.656 170.736C279.272 170.48 278.536 170.352 277.448 170.352C273.736 170.352 270.184 170.96 266.792 172.176C263.4 173.392 260.648 175.184 258.536 177.552C256.424 179.92 255.368 182.736 255.368 186C255.368 188.176 255.848 190.128 256.808 191.856C257.768 193.584 259.08 194.896 260.744 195.792C259.656 195.984 258.728 196.08 257.96 196.08C254.568 195.248 251.88 193.904 249.896 192.048C247.976 190.128 247.016 187.664 247.016 184.656C247.016 177.808 251.88 172.88 261.608 169.872C271.4 166.864 284.232 165.36 300.104 165.36C300.872 165.36 301.384 166.832 301.64 169.776L293.768 169.584C292.36 169.584 291.304 169.776 290.6 170.16C289.896 170.544 289.32 171.28 288.872 172.368C288.488 173.456 288.04 175.248 287.528 177.744C286.824 181.072 285.384 188.976 283.208 201.456C282.76 203.888 282.024 207.952 281 213.648C279.976 219.28 279.208 223.184 278.696 225.36C276.712 233.68 273.128 239.888 267.944 243.984C262.824 248.08 256.392 250.128 248.648 250.128Z"
          stroke={theme.body}
          stroke-width="3"
        />

        <path
          className="myName"
          d="M386.568 222.096C387.336 222.608 387.72 223.344 387.72 224.304C387.72 225.968 386.984 227.6 385.512 229.2C384.104 230.8 382.28 232.112 380.04 233.136C377.864 234.096 375.72 234.576 373.608 234.576C370.28 234.576 367.72 233.36 365.928 230.928C364.2 228.432 363.112 226.288 362.664 224.496C362.28 222.64 361.736 219.344 361.032 214.608C360.84 213.264 360.488 212.4 359.976 212.016C359.464 211.568 358.472 211.344 357 211.344L340.776 211.44C335.528 219.952 330.792 226.032 326.568 229.68C322.344 233.264 317.864 235.056 313.128 235.056C310.184 235.056 307.944 234.48 306.408 233.328C304.872 232.176 304.104 230.672 304.104 228.816C304.104 227.344 304.584 226.032 305.544 224.88C306.504 223.728 307.848 222.928 309.576 222.48C309.576 225.04 309.928 226.768 310.632 227.664C311.4 228.496 312.616 228.912 314.28 228.912C317.48 228.912 320.584 227.664 323.592 225.168C326.664 222.608 330.504 218 335.112 211.344C333.64 211.216 332.584 210.96 331.944 210.576C331.368 210.192 331.08 209.616 331.08 208.848C331.08 208.272 331.24 207.504 331.56 206.544C331.88 205.52 332.2 204.88 332.52 204.624C333.544 205.008 335.624 205.424 338.76 205.872C342.344 200.432 346.248 194.256 350.472 187.344C354.696 180.432 357.256 176.24 358.152 174.768C359.368 172.784 361.096 169.936 363.336 166.224C364.104 165.072 364.776 164.24 365.352 163.728C365.992 163.216 366.792 162.96 367.752 162.96C368.584 162.96 369.576 163.12 370.728 163.44C370.024 164.592 369.48 166.256 369.096 168.432C368.776 170.608 368.584 172.944 368.52 175.44L368.424 179.376C368.424 182.704 368.488 186.608 368.616 191.088C368.808 195.504 369 199.12 369.192 201.936C369.576 207.568 370.024 212.112 370.536 215.568C371.048 218.96 371.912 221.808 373.128 224.112C374.408 226.352 376.168 227.472 378.408 227.472C379.88 227.472 381.32 226.992 382.728 226.032C384.136 225.008 385.416 223.696 386.568 222.096ZM353.64 206.832C355.432 206.832 357.672 206.768 360.36 206.64L360.264 191.568C360.264 186.192 360.488 181.744 360.936 178.224C355.048 187.632 351.496 193.392 350.28 195.504L343.848 206.352C347.496 206.672 350.76 206.832 353.64 206.832Z"
          stroke={theme.body}
          stroke-width="3"
        />

        <path
          className="myName"
          d="M401.856 233.232C402.944 232.784 403.776 232.336 404.352 231.888C404.928 231.376 405.312 230.768 405.504 230.064C407.168 223.856 409.568 213.808 412.704 199.92C415.904 186.032 417.664 177.84 417.984 175.344C418.048 175.088 418.08 174.768 418.08 174.384C418.08 173.424 417.76 172.784 417.12 172.464C416.48 172.08 415.36 171.888 413.76 171.888C410.368 171.888 407.552 172.112 405.312 172.56C405.312 171.216 405.504 170.032 405.888 169.008C406.272 167.984 406.88 167.472 407.712 167.472C415.2 167.408 420.16 167.312 422.592 167.184C425.088 167.056 428.128 166.8 431.712 166.416C432.032 166.544 432.224 167.088 432.288 168.048C432.352 168.944 432.352 169.68 432.288 170.256C430.176 170.512 428.768 170.832 428.064 171.216C427.36 171.536 426.88 172.208 426.624 173.232C426.112 175.216 423.584 187.344 419.04 209.616C416.48 222.224 415.072 229.072 414.816 230.16C414.432 231.824 413.248 232.944 411.264 233.52C409.28 234.096 406.464 234.384 402.816 234.384L401.856 233.232Z"
          stroke={theme.body}
          stroke-width="3"
        />

        <path
          className="myName"
          d="M645.48 243.888C646.056 244.272 646.472 244.624 646.728 244.944C646.984 245.328 647.112 245.872 647.112 246.576C647.112 248.432 646.344 250.224 644.808 251.952C643.336 253.68 641.032 255.088 637.896 256.176C634.824 257.328 630.984 257.904 626.376 257.904C616.264 257.904 606.216 255.184 596.232 249.744C586.312 244.368 577.096 237.392 568.584 228.816C560.136 220.176 552.584 210.864 545.928 200.88C545.992 200.304 546.12 199.92 546.312 199.728C546.568 199.472 546.888 199.312 547.272 199.248C552.904 198.672 557.448 197.968 560.904 197.136C564.36 196.24 567.144 194.832 569.256 192.912C571.432 190.928 572.52 188.176 572.52 184.656C572.52 179.6 570.536 175.856 566.568 173.424C562.6 170.992 557.48 169.776 551.208 169.776C549.8 169.776 548.744 169.904 548.04 170.16C547.336 170.416 546.888 170.96 546.696 171.792C543.368 184.464 540.456 198.128 537.96 212.784L534.504 233.616C532.904 233.488 530.984 233.808 528.744 234.576C526.568 235.408 525.224 236.272 524.712 237.168C524.584 237.168 524.36 237.072 524.04 236.88C523.784 236.752 523.592 236.656 523.464 236.592C525.704 227.888 528.552 215.44 532.008 199.248C535.464 183.056 537.192 173.808 537.192 171.504C537.192 170.928 537.032 170.576 536.712 170.448C536.456 170.256 535.944 170.16 535.176 170.16C532.424 170.16 529.896 170.896 527.592 172.368C525.352 173.776 523.592 175.664 522.312 178.032C521.032 180.4 520.392 182.96 520.392 185.712C520.392 189.68 521.672 192.88 524.232 195.312C523.4 195.312 522.12 195.184 520.392 194.928C518.728 194.608 517.448 194.288 516.552 193.968C515.016 193.392 513.832 192.304 513 190.704C512.168 189.104 511.752 187.28 511.752 185.232C511.752 181.072 513.384 177.52 516.648 174.576C519.976 171.568 524.392 169.328 529.896 167.856C535.4 166.32 541.384 165.552 547.848 165.552C553.48 165.552 558.888 166.16 564.072 167.376C569.256 168.528 573.512 170.384 576.84 172.944C580.232 175.44 581.928 178.608 581.928 182.448C581.928 185.712 580.712 188.72 578.28 191.472C575.912 194.224 572.776 196.528 568.872 198.384C565.032 200.24 561 201.552 556.776 202.32C560.616 209.296 566.248 216.464 573.672 223.824C581.16 231.184 589.64 237.328 599.112 242.256C608.648 247.248 618.184 249.744 627.72 249.744C632.072 249.744 635.752 249.2 638.76 248.112C641.832 247.088 644.072 245.68 645.48 243.888Z"
          stroke={theme.body}
          stroke-width="3"
        />

        <path
          className="myName"
          d="M670.568 222.096C671.336 222.608 671.72 223.344 671.72 224.304C671.72 225.968 670.984 227.6 669.512 229.2C668.104 230.8 666.28 232.112 664.04 233.136C661.864 234.096 659.72 234.576 657.608 234.576C654.28 234.576 651.72 233.36 649.928 230.928C648.2 228.432 647.112 226.288 646.664 224.496C646.28 222.64 645.736 219.344 645.032 214.608C644.84 213.264 644.488 212.4 643.976 212.016C643.464 211.568 642.472 211.344 641 211.344L624.776 211.44C619.528 219.952 614.792 226.032 610.568 229.68C606.344 233.264 601.864 235.056 597.128 235.056C594.184 235.056 591.944 234.48 590.408 233.328C588.872 232.176 588.104 230.672 588.104 228.816C588.104 227.344 588.584 226.032 589.544 224.88C590.504 223.728 591.848 222.928 593.576 222.48C593.576 225.04 593.928 226.768 594.632 227.664C595.4 228.496 596.616 228.912 598.28 228.912C601.48 228.912 604.584 227.664 607.592 225.168C610.664 222.608 614.504 218 619.112 211.344C617.64 211.216 616.584 210.96 615.944 210.576C615.368 210.192 615.08 209.616 615.08 208.848C615.08 208.272 615.24 207.504 615.56 206.544C615.88 205.52 616.2 204.88 616.52 204.624C617.544 205.008 619.624 205.424 622.76 205.872C626.344 200.432 630.248 194.256 634.472 187.344C638.696 180.432 641.256 176.24 642.152 174.768C643.368 172.784 645.096 169.936 647.336 166.224C648.104 165.072 648.776 164.24 649.352 163.728C649.992 163.216 650.792 162.96 651.752 162.96C652.584 162.96 653.576 163.12 654.728 163.44C654.024 164.592 653.48 166.256 653.096 168.432C652.776 170.608 652.584 172.944 652.52 175.44L652.424 179.376C652.424 182.704 652.488 186.608 652.616 191.088C652.808 195.504 653 199.12 653.192 201.936C653.576 207.568 654.024 212.112 654.536 215.568C655.048 218.96 655.912 221.808 657.128 224.112C658.408 226.352 660.168 227.472 662.408 227.472C663.88 227.472 665.32 226.992 666.728 226.032C668.136 225.008 669.416 223.696 670.568 222.096ZM637.64 206.832C639.432 206.832 641.672 206.768 644.36 206.64L644.264 191.568C644.264 186.192 644.488 181.744 644.936 178.224C639.048 187.632 635.496 193.392 634.28 195.504L627.848 206.352C631.496 206.672 634.76 206.832 637.64 206.832Z"
          stroke={theme.body}
          stroke-width="3"
        />

        <path
          className="myName"
          d="M449.08 234.672C447.8 234.672 446.936 234.48 446.488 234.096C446.104 233.776 445.912 233.2 445.912 232.368C445.912 230.896 446.424 227.536 447.448 222.288C448.536 216.976 450.136 209.52 452.248 199.92C453.592 193.84 454.808 188.144 455.896 182.832C456.984 177.456 457.528 174.256 457.528 173.232C457.528 172.72 456.984 172.464 455.896 172.464C455.256 172.464 453.72 172.656 451.288 173.04C447.832 173.616 445.272 173.904 443.608 173.904C442.136 173.904 441.112 173.744 440.536 173.424C439.96 173.04 439.672 172.4 439.672 171.504C439.672 170.672 439.832 169.648 440.152 168.432C440.536 167.152 440.92 166.224 441.304 165.648C443.608 166.544 446.52 166.992 450.04 166.992C453.048 166.992 457.368 166.704 463 166.128C463.768 166.064 465.784 165.904 469.048 165.648C472.312 165.392 475.224 165.264 477.784 165.264C485.336 165.264 490.968 166.608 494.68 169.296C498.456 171.984 500.344 176.24 500.344 182.064C500.344 186.928 499.128 191.216 496.696 194.928C494.328 198.64 491.096 201.52 487 203.568C482.904 205.552 478.424 206.544 473.56 206.544C470.104 206.544 467.672 206.096 466.264 205.2C464.92 204.304 464.248 203.248 464.248 202.032C464.248 201.456 464.376 200.912 464.632 200.4C464.952 199.824 465.304 199.376 465.688 199.056C466.264 199.504 467.256 199.92 468.664 200.304C470.072 200.624 471.672 200.784 473.464 200.784C477.112 200.784 480.248 200.016 482.872 198.48C485.496 196.944 487.48 194.864 488.824 192.24C490.232 189.616 490.936 186.672 490.936 183.408C490.936 174.896 486.168 170.64 476.632 170.64C474.072 170.64 471.736 170.928 469.624 171.504C467.576 172.08 466.392 173.008 466.072 174.288C464.792 179.6 462.712 189.712 459.832 204.624C457.016 219.536 455.608 228.08 455.608 230.256C455.608 230.832 455.64 231.44 455.704 232.08C455.768 232.656 455.8 233.2 455.8 233.712C453.24 234.352 451 234.672 449.08 234.672Z"
          stroke={theme.body}
          stroke-width="3"
        />

        <defs>
          <style
            dangerouslySetInnerHTML={{
              __html: `

		@-webkit-keyframes fadein{
			from{
				opacity: 0;
			}
			to{
				opacity: 1;
			}
		}

      .myName{
			stroke-dasharray: 800;
			stroke-dashoffset: 800;
			-webkit-animation: dash 5s linear forwards 0.5s;
			-o-animation: dash 5s linear forwards 0.5s;
			-moz-animation: dash 5s linear forwards 0.5s;
			animation: dash 5s linear forwards 0.5s;
		}

		@-webkit-keyframes dash{
			from{
				stroke-dashoffset: 800;
			}
			to{
				stroke-dashoffset: 0;
			}
		}
    `,
            }}
          />
        </defs>
      </svg>
    );
  }
}

export default LogoLoader;
