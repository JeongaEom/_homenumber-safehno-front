<script setup>
  const p = defineProps({
    text: { type: String, default: "" },
  });

  const d = ({
    topList: [
      { nb: '01', title: '이용약관 동의' },
      { nb: '02', title: '회원정보 입력' },
      { nb: '03', title: '가입 완료' },
    ]
  });
</script>

<template>
  <div class="title-sign">
    <div>
      <ul>
        <li
          v-for="item in d.topList"
          :class="{
            active: p.text === item.nb,
            next: p.text > item.nb
          }"
        >
          <div class="next-title">
            <div class="basic">
            {{ item.nb }}
            </div>
            <div class="text-title">{{ item.title}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .title-sign {
    width: 100%;
    border: 1px solid #171A22;
    border-top: none;
    border-bottom: none;
    padding: 1.5rem 1.5rem 10px;
    >div {
      >ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        li {
          border-bottom: 1px solid $c-g300;
          width: 33.3%;
          padding: 10px 0 15px;
          .next-title {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            .basic {
              border: 1px solid $c-g400;
              border-radius: 50%;
              width: 40px;
              height: 40px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: bold;
              color: $c-g800;
              background-color: $wt;
              margin-bottom: 10px;
            }
            .text-title {
              color: $c-g500;
            }
          }
        }
        li.active,
        li.next {
          .basic {
            border: none;
            color: $wt;
          }
          .text-title {
            font-weight: bold;
            color: $c-g900;
          }
        }
        li.active {
          border-bottom: 3px solid $c-b600;
          .next-title {
            .basic {
              background: linear-gradient(140deg, $c-b700, $c-b500, $c-b300);
            }
          }
        }
        li.next {
          border-bottom: 3px solid $c-g500;
          .next-title {
            .basic {
              background: linear-gradient(140deg, $c-g900, $c-g800, $c-g500);
            }
          }
        }
      }
    }
  }

  @media (min-width: 769px) {
  .title-sign {
    >div {
      >ul {
        li.active,
        li.next {
          .text-title {
              font-size: 20px;
            }
          }
        }
      }
    }
  }
</style>